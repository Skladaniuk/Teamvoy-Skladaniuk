import css from './ButtonLoadMore.module.css';


export const ButtonLoadMore = ({ loadMore }) => {
  return (
    <>
      <button className={css.buttonLoadMore} type="button" onClick={loadMore}>
        Load More
      </button>
    </>
  );
};