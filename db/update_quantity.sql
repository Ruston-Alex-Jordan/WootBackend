UPDATE products
SET quantity = $1
WHERE productid = $2
returning *