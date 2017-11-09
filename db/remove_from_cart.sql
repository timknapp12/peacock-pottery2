-- delete from cart where products = $1 and user_id = $2

delete from cart where cart_id = $1;