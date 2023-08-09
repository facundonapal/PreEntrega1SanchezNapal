import React from "react";
import Item from "./Item.jsx";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const ItemList = ({ prods }) => {
  return (
    <Box className="item-list-container" sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} spacing={1}>
        {prods.map((p) => (
          <Grid container item xs={3} key={p.id}>
            <Item
              name={p.name}
              description={p.description}
              stock={p.stock}
              image={p.image}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ItemList;
