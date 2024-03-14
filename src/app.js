import { getProduct } from "./library/axios/axios";

const products = await getProduct("products");

export const app = () => {
  const productContainer = document.createElement("div");

  const p = products.map((obj) => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
        <div class="flex gap-5 " id="${obj.id}">
      <div class="flex flex-col ">
        <p>brand:${obj.brand}</p>
        <p>name:${obj.name}</p>
      </div>
      <div>
        <img
          src="${obj.src}"
          class="w-[80px] h-[80px]"
        />
      </div>
    </div>
        `;
        // El([{
        //     element:"div",
        //     className:"w-full",
        //     children:El([{
        //         element:"div",
        //         className:"w-5",
        //         children:obj.brand,
        //     },
        //     {
        //         element:"div",
        //         className:"w-5",
        //         children:obj.name,
        //     }
        // ])
        // }])
    productContainer.append(productDiv);
    return obj;
});
  console.log(p);
  productContainer.className = "flex flex-col gap-[50px] ml-[46px]";
  return productContainer;
};
