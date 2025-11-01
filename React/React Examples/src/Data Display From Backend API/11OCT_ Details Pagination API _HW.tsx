interface OCT11DetailsAPIPaginationHWProps {
  id: number;
  title: string;
  price: number;
  brand: string;
  thumbnail: string;
}

const OCT11DetailsAPIPaginationHW = (
  props: OCT11DetailsAPIPaginationHWProps
) => {
  return (
    <div>
      <h3>Id: {props.id}</h3>
      <h3>Title: {props.title}</h3>
      <h3>Price: ${props.price}</h3>
      <h3>Brand: {props.brand}</h3>
      <img src={props.thumbnail} />
    </div>
  );
};

export default OCT11DetailsAPIPaginationHW;
