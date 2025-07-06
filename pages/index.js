import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Valestra – Luxury Vault</title>
        <meta name="description" content="Curated luxury drops, exclusive gifting." />
      </Head>
      <main>
        <h1>Welcome to Valestra</h1>
        <p>Your journey through the Vault begins here.</p>
        <button>Unlock the Drop</button>
      </main>
    </div>
  )
}
