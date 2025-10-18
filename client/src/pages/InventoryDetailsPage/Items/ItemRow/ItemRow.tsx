const ItemRow = ({ item, allKeys, checked, onToggle }) => {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          className="form-check-input"
          checked={checked}
          onChange={onToggle}
        ></input>
      </td>
      {allKeys.map((key) => {
        const value = item[key] ?? item.fields?.[key] ?? "-";
        return (
          <>
            <td key={key}>{value}</td>
          </>
        );
      })}
    </tr>
  );
};

export default ItemRow;
