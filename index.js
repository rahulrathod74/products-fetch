let productDiv = document.querySelector(".product");
      let categoryListDiv = document.querySelector(".categoryList");
      let allcat = [];
      let displayProduct = async (allCheckCat = []) => {
        productDiv.innerHTML = "";
        
        let product = await fetch("https://fakestoreapi.com/products");
        let finalproduct = await product.json();
        finalproduct.forEach((ele) => {
          //Category Data
          if (!allcat.includes(ele.category)) {
            categoryListDiv.innerHTML += `<label >
            <input type="checkbox" onclick="categoryFilter()" value="${ele.category}">${ele.category}
           </label>`;
            allcat.push(ele.category);
          }
          if (allCheckCat.length == 0) {
            allCheckCat = allcat;
          }
          if (allCheckCat.includes(ele.category)) {
            //Product Data
            productDiv.innerHTML += ` <div class="productItem">
                <img src="${ele.image}" alt="">
                <h4>${ele.category}</h4>
                <p>price Rs. ${ele.price} | ${ele.rating.rate}</p>
                <h3>${ele.title}</h3>
            </div>`;
          }
        });
      };
      displayProduct();
      let categoryFilter=()=>{
        let checkInput=document.querySelectorAll("input[type='checkbox']")
        let checkdata=[];
        checkInput.forEach((e)=>{
            if(e.checked){
                checkdata.push(e.value);
            }
        })
        displayProduct(checkdata)
      }
    