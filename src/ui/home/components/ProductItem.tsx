import { Box, Card, CardContent, CardMedia, Link, Typography } from "@mui/material";
import { ProductModel } from "@/types/productTypes";

function ProductItem(props: ProductModel){
    const {id, title, price, category, image, description} = props;
    return(
        <Card sx={{
            borderRadius:3,
            boxShadow:8,
            width: '100%'
            }}>
        <CardMedia
            className={"experience-image"}
            component="img"
            image={image}/>
                <CardContent
                sx={{height: 200, color: "#2d2d2d"}}
                >
                    <div className="card-container">
                        <Box>
                            <Typography sx={{fontWeight: 'bold', fontSize: 22, lineHeight: "22px", fontFamily: "Montserrat"}}>
                                {props.title}
                            </Typography>
                            <Box sx={{ 
                                fontStyle: 'italic',
                                fontWeight: 'light',
                                fontSize: '16px',
                                mb: 1,
                                mt: 1,
                                color:'gray'
                                }}>
                                {title}
                            </Box>
                        </Box>
                        
                        <Box sx={{ 
                            fontWeight: 'light',
                            fontSize: '14px',
                            color: "#525252",
                            mb: 1
                            }}>
                                <b>Category: </b>{category}
                        </Box>
                        <Box sx={{height: '75px', overflow: 'hidden'}}>
                            
                                {description}
                            
                        </Box>
                    </div>
                    
                </CardContent>
                <Box sx={{display: 'grid', gridTemplateRows: '25px'}}>             
                    
                </Box>
        </Card>
    ); 
}

export default ProductItem;