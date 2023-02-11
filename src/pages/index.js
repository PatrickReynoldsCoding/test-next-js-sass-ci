import styles from "@/styles/Home.module.css";
// all html classNames will be used via  {`${styles['class-name']}`} to preserve our css readability

export default function Home() {
  return (
    <>
      <button className={`${styles['cat-button']}`}>hello</button>
    </>
  );
}
