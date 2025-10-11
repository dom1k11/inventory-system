const InventoryRow = ({inventory}) => {
  return (
    <>
      <tr>
        <td>
          <b> {inventory.id}</b>
        </td>
        <td>{inventory.title}</td>
        <td>{inventory.description}</td>
        <td>{inventory.category}</td>
        <td>{inventory.created_by}</td>
      </tr>
    </>
  );
};

export default InventoryRow;
