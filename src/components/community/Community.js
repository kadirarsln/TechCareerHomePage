import React from 'react'
import './Community.css'
import communityImage from '../images/Group.png';
import communityImage2 from '../images/Group2.png';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Community() {
    return (
        <section class="community-communityContainer">
            <img src={communityImage} alt="Community" className='community-img1' />

            <div className='community-communityContentContainer'>
                <h1 className='community-communityTitle'>Komünite</h1>
                <p className='community-communityText'>Teknoloji Komünitesi ile hayalindeki işi bulabilir, kendini geliştirecek eğitimlere katılabilir ve teknoloji uzmanlarıyla tanışabilirsin!</p>

                <Stack spacing={2} direction="row" sx={{ marginTop: "10px" }}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#00B666",
                            color: "#FFFFFF",
                            textTransform: "none",
                            width: "192px",
                            height: "48px"
                        }}
                        onClick={() => window.open('https://www.techcareer.net/community', '_blank')}
                    >
                        Keşfet
                    </Button>
                </Stack>
            </div>

            <img src={communityImage2} alt="Community" className='community-img2' />
        </section>
    )
}

export default Community