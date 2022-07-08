import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
export function WelcomePageHotels({hotel}){
    return (
        <>
        <Grid item xs={12} sm={4} md={4}>
            <Card className="hotelCard">
              <CardMedia
                className="media"
                component="img"
                image={hotel.poster}
                alt="green iguana"
              />
              <CardContent>
                <div className="hotelSpec">
                  <h3>{hotel.name}</h3>
                  <p>{hotel.rating}</p>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </>
    )
}