
import Navbar from '@//components/Navbar';
import Head from 'next/head';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Mallet</title>
            </Head>
            <Navbar />
            <div>
                <h1>I am Product</h1>
            </div>
        </div>
    );
}