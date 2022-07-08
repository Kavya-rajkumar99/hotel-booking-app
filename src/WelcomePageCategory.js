import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
export function WelcomePageCategory({category}){
    return(
        <>
          <Grid item xs={12} sm={4} md={4}>
            <Card className="hotelCard">
              <CardMedia
                className="media"
                component="img"
                image={category}
                alt="green iguana"
              />
            </Card>
          </Grid>
        </>
    )
}