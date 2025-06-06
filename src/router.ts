import { renderHome } from "./pages/home";
import { renderProductDetail } from "./pages/ProductDetail";
import { renderProductList, setupProductSearch } from "./pages/ProductList";
import { renderAbout } from "./pages/About";
import { SkeletonUI } from "./components/skeleton";
// Main router function
export async function router() {
  const hash = location.hash || "#/";
  const app = document.getElementById("app")!;
  
  try {
    if (hash === "#/") {
      app.innerHTML = renderHome();
    } else if (hash === "#/products") {
      // Show skeleton first
      app.innerHTML = SkeletonUI.buildSkeletonHTML();

      // Fetch and render products after skeleton is visible
      const productHTML = await renderProductList();
      app.innerHTML = productHTML;

      // Add click event for product cards
      document.querySelectorAll('[data-id]').forEach((card) => {
        card.addEventListener("click", () => {
          const id = card.getAttribute("data-id");
          location.hash = `#/product/${id}`;
        });
      });

      // Setup search filter
      setupProductSearch();
    } else if (hash.startsWith("#/product/")) {
      const id = Number(hash.split("/")[2]);
      app.innerHTML = await renderProductDetail(id);
    }  else if (hash === "#/about") {
  app.innerHTML = renderAbout();
    }
    else {
      app.innerHTML = `<h1 class="text-center text-red-500">Page Not Found</h1>`;
    }
  } catch (error) {
    app.innerHTML = `<p class="text-red-500 text-center">Error loading page: ${error}</p>`;
  }
}
