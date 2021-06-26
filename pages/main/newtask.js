import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Header from '../../components/header';
import AddTaskView from '../../components/addTaskView';
import Footer from '../../components/footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Add a New Task</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header></Header>

      <main className={styles.main + ' bg-gray-100'}>
        <AddTaskView></AddTaskView>
      </main>

      <Footer className={styles.footer + ' bg-gray-100'}></Footer>
    </div>
  );
}