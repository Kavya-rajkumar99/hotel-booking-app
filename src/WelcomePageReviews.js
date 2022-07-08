import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
export function WelcomePageReviews({review}){
    return(
        <>
        <Grid item xs={12} sm={4} md={4}>
            <Card className="hotelCard">
              <CardContent>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <AvatarGroup total={review.noOfPeople}>
                    <Avatar
                      alt={review.avatarNames[0]}
                      src={review.avatarPosters[0]}
                    />
                    <Avatar
                      alt={review.avatarNames[0]}
                      src={review.avatarPosters[1]}
                    />
                  </AvatarGroup>
                </Box>
                <p>{review.feedback}</p>
              </CardContent>
              <CardActions>
                <Box style={{ marginLeft: "auto" }}>
                  <p>{review.rating}</p>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </>
    )
}