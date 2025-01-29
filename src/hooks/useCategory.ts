import axios from "axios";
import { useEffect, useState } from "react";

const UseCategory = () => {
  const [categoriesList, setCategoriesList] = useState<
    { name: string; slug: string; url: string }[]
  >([]);
  const [categoriesData, setCategoriesData] = useState<any[]>([]);

  const CATEGORIESLIST_URL = "https://dummyjson.com/products/categories";

  // Fetch the list of categories
  useEffect(() => {
    const fetchCategoriesList = async () => {
      try {
        const response = await axios.get(CATEGORIESLIST_URL);
        setCategoriesList(response.data); // Update categoriesList with objects containing name, slug, and url
      } catch (error) {
        console.log("Error fetching categories list:", error);
      }
    };

    fetchCategoriesList();
  }, []);

  // Fetch the data for each category
  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const allCategoriesData = await Promise.all(
          categoriesList.map(async (category) => {
            const response = await axios.get(
              `https://dummyjson.com/products/category/${category.slug}`
            );

            // Include the category name and URL with the fetched data
            return {
              ...response.data, // The category products data
              categoryName: category.name, // Category name
              categoryUrl: category.url, // Category URL
              slug: category.url,
            };
          })
        );

        setCategoriesData(allCategoriesData); // Update categoriesData with all category data
      } catch (error) {
        console.log("Error fetching categories data:", error);
      }
    };

    if (categoriesList.length > 0) {
      fetchCategoriesData();
    }
  }, [categoriesList]); // Trigger this effect whenever categoriesList changes

  return { categoriesData, categoriesList };
};

export default UseCategory;
