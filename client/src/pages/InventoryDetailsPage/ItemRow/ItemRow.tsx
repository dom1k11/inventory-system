const ItemRow = ({ item }) => {
  return (
    <>
      <tr>
        <td>
          <b> {item.custom_id}</b>
        </td>
        <td>{item.field_title}</td>
        <td>{item.value}</td>
      </tr>
    </>
  );
};

export default ItemRow;
