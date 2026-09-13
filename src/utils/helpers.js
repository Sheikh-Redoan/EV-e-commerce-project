export const getImageUrl = (imagePath) => {
  if (!imagePath) return '/default-product.jpg';
  if (imagePath.startsWith('http')) return imagePath;
  return `${import.meta.env.VITE_API_BASE_URL}/uploads/${imagePath}`;
};

export const getInitials = (name) => {
  if (!name) return '?';
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
};

export const calculateDiscount = (original, discounted) => {
  if (original <= 0) return 0;
  return Math.round(((original - discounted) / original) * 100);
};

export const groupBy = (array, key) => {
  return array.reduce((result, item) => {
    const group = item[key];
    if (!result[group]) result[group] = [];
    result[group].push(item);
    return result;
  }, {});
};

export const sortByProperty = (array, property, ascending = true) => {
  return [...array].sort((a, b) => {
    if (ascending) {
      return a[property] > b[property] ? 1 : -1;
    } else {
      return a[property] < b[property] ? 1 : -1;
    }
  });
};

export const filterByPrice = (products, minPrice, maxPrice) => {
  return products.filter(
    (product) =>
      product.price >= minPrice && product.price <= maxPrice
  );
};

export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

export const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
