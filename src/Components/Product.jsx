import React, { useEffect } from 'react';
import styles from './Product.module.css';
import { useParams } from 'react-router-dom';
import Head from './Head';

const Product = () => {
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduct(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json);
      } catch (err) {
        setError('Failed to get product data');
      } finally {
        setLoading(false);
      }
    }
    fetchProduct(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div>Loading product data</div>;
  if (error) return <p>{error}</p>;
  if (product === null) return null;
  return (
    <section className={`${styles.product} animeLeft`}>
      <Head
        title={`Ranek | ${product.nome}`}
        description={`Ranek | Esse é um produto: ${product.nome}`}
      />
      {product.fotos.map((photo) => (
        <img key={photo.src} src={photo.src} alt={photo.titulo} />
      ))}
      <h1>{product.nome}</h1>
      <span className={styles.price}>R$ {product.preco}</span>
      <p className={styles.description}>{product.descricao}</p>
    </section>
  );
};

export default Product;
