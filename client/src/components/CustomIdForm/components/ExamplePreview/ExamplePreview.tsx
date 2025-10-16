
const ExamplePreview = ({ fields }) => {
  const example = fields
    .map((field) => {
      switch (field.type) {
        case "fixed":
          return field.value || "";
        case "random_9":
          return Math.floor(Math.random() * 1_000_000_000)
            .toString()
            .padStart(9, "0");
        case "random_6":
          return Math.floor(Math.random() * 1_000_000)
            .toString()
            .padStart(6, "0");
        case "sequence": {
          const digits = parseInt(field.value.replace("D", ""), 10);
          return "1".padStart(digits, "0");
        }
        case "date":
          return new Date().toISOString().split("T")[0];
        case "20_bit_random": {
          const buf = new Uint32Array(1);
          crypto.getRandomValues(buf);
          return buf[0] & 0xfffff;
        }
        case "32_bit_random": {
          const buf = new Uint32Array(1);
          crypto.getRandomValues(buf);
          return buf[0];
        }
        default:
          return "";
      }
    })
    .join("-");

  return (
    <>
      <h2>
        <strong>Example:</strong>{" "}
        <span className="text-secondary">{example}</span>
      </h2>
      {/* TODO IMPORTANT: CREATE ENDPOINT TO GENERATE CUSTOM_ID PREVIEW ON SERVER */}
    </>
  );
};

export default ExamplePreview;
