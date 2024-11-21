import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './TeknikSozluk.css'
import teknikSozlukImage from '../images/teknik-sozluk.png';


function TeknikSozluk() {
    return (
        <section className='teknikSozlukContainer'>
            <img src={teknikSozlukImage} alt="Teknik Sözlük" className='img' />

            <div className='contentContainer'>
                <h1 className='title'>Teknik Sözlük</h1>
                <p className='text'>A’dan Z’ye tüm teknoloji terimlerinin tanımlarını senin için hazırladığımız teknoloji sözlüğünde bulabilirsin!</p>

                <Paper
                    component="form"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: { xs: '90%', sm: '600px', md: '800px' },
                        height: 60,
                        borderRadius: 2,
                        margin: '20px',
                        backgroundColor: '#DCFBD5'
                    }}
                >
                    <IconButton
                        type="button"
                        sx={{ p: '10px', marginLeft: '20px' }}
                        aria-label="search"
                    >
                        <SearchIcon sx={{ fontSize: '2rem' }} />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Sözlük İçinde Ara"
                    />
                </Paper>

                <Stack spacing={2} direction="row" sx={{ marginTop: "10px" }}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#00B666",
                            color: "#FFFFFF",
                            textTransform: "none",
                            width: { xs: '100%', sm: "192px" },
                            height: "48px"
                        }}
                        onClick={() => window.open('https://www.techcareer.net/dictionary', '_blank')}
                    >
                        Kullanmak İçin Tıkla
                    </Button>
                </Stack>
            </div>
        </section>
    )
}


export default TeknikSozluk