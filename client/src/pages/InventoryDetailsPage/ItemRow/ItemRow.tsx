const ItemRow = ({ item, allKeys }) => {
  return (
    <tr>
      {allKeys.map((key) => {
        const value =
          item[key] ??
          item.fields?.[key] ??
          "-";
        return <td key={key}>{value}</td>;
      })}
    </tr>
  );
};

export default ItemRow;
