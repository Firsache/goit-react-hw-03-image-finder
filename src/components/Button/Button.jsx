import { Loadmore } from './Button.styled';

export function Button({ handlePageChange }) {
  return <Loadmore onClick={() => handlePageChange()}>Load more</Loadmore>;
}
