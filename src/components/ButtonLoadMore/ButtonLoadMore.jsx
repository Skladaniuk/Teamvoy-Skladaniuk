import css from './ButtonLoadMore.module.css';


export const ButtonLoadMore = ({ loadMore }) => {
  return (
    <>
      <button type="button" onClick={loadMore}>
        Load More
      </button>
    </>
  );
};