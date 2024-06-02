const printA = () => {
  console.log("print aaaa");
  console.log(abc);
};

const id = 0;

// export name: trên cùng dòng.
export const product = {
  name: "nokia",
};

export const abc = 10;

// export name: gom về cuối file
export { printA, id };

/**
 * export name
 * export default
 */
