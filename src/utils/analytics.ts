export const trackAddToCart = (product: any, quantity: number = 1) => {
  window.gtag("event", "add_to_cart", {
    currency: "Azn", 
    value: product.price * quantity,
    items: [
      {
        item_id: product.id,
        item_name: product.name,
        price: product.price,
        quantity: quantity,
      },
    ],
  });
};

export const trackRemoveFromCart = (product: any, quantity: number = 1) => {
  window.gtag("event", "remove_from_cart", {
    currency: "Azn",
    value: product.price * quantity,
    items: [
      {
        item_id: product.id,
        item_name: product.name,
        price: product.price,
        quantity: quantity,
      },
    ],
  });
};