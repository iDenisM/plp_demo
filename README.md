Notes:
- For the product variants I used varints node from the API, due to the fact that not all the products have variants I've implemented the logic so that the slider below each product will have back and forward buttons only if more then three variants are present and if no variants are present then there will be no slider
- From the API I used the availability node to display a Sold Out label in case of zero availability
- The product price have a container that holds the currency and value the reason is because this way you can mange the position of the currency to the right or left side of the product no all the countries have the currency in the same position
- As currency I've use the currency node from the API due to the missing currency symbol I used the label only
- All the images have a placeholder with an height that implements the aspect ration logic so that no CLS are present
- Some strange vlues for style like negative values were used to reach the most from pixel perfect aprouch