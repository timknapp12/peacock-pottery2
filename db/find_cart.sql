select p.product_id, p.product_name, p.price, p.image, c.cart_id
from products p
join cart c on c.products = p.product_id
where user_id = $1