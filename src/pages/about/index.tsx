import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import aboutData from './api/Home';
import SIHWin from '../../assests/images/SIHWin.jpg';
import Prajwalan from '../../assests/images/prajwalan.jpg';
import CodingChallenge from '../../assests/images/codingchallenge.jpg';
import History from '../../assests/images/history.jpg'

const imageMap: any = {
  'prajwalan.jpg': Prajwalan,
  'SIHWin.jpg': SIHWin,
  'codingchallenge.jpg': CodingChallenge,
};

const sectionStyle = {
  p: 4,
  mb: 4,
  background: 'linear-gradient(135deg, #fdfdfd 0%, #ffffff 100%)',
  borderLeft: '5px solid #1976d2',
  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  transition: 'box-shadow 0.3s ease',
  '&:hover': {
    boxShadow: '0 8px 28px rgba(0,0,0,0.1)',
  },
};

const About = () => {
  const { title, vision, mission, history, hodMessage, achievements } = aboutData;

  return (
    <Box sx={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
          <Typography
            variant="h2"
            gutterBottom
            align="center"
            sx={{ textDecoration: 'underline', fontWeight: 'bold', color: '#1976d2' }}
          >
            {title}
          </Typography>

          {/* Vision & Mission */}
          <Paper sx={sectionStyle}>
            <Typography variant="h3" gutterBottom sx={{ color: '#1976d2' }}>
              Vision & Mission
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                Vision
              </Typography>
              <Typography sx={{ fontSize: '1.1rem', color: '#555' }}>
                {vision}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                Mission
              </Typography>
              <Typography sx={{ fontSize: '1.1rem', color: '#555' }}>
                {mission}
              </Typography>
            </Box>
          </Paper>
        
          {/* Department History */}
          <Box
            sx={{
              mb: 6,
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Box
              component="img"
              src={History} // Or any image you want
              alt="Department"
              sx={{
                width: { xs: '100%', md: '45%' },
                height: { xs: 'auto', md: 300 },
                objectFit: 'cover',
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
                Department History
              </Typography>
              <Typography sx={{ fontSize: '1.1rem', color: '#555' }}>
                {history}
              </Typography>
            </Box>
          </Box>



          {/* Message from HOD */}
          <Paper sx={sectionStyle}>
            <Typography variant="h3" gutterBottom sx={{ color: '#1976d2' }}>
              Message from HOD
            </Typography>
            <Typography sx={{ fontSize: '1.1rem', color: '#555' }}>
              {hodMessage.message}
            </Typography>
            <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold', color: '#333' }}>
              {hodMessage.name}
            </Typography>
          </Paper>

          {/* Achievements */}
          <Paper sx={{ ...sectionStyle, mb: 0 }}>
            <Typography variant="h3" gutterBottom sx={{ color: '#1976d2' }}>
              CSD & CSIT Student Achievements
            </Typography>
            <Typography sx={{ mb: 3, fontSize: '1.1rem', color: '#555' }}>
              A glimpse of our students' success stories in hackathons, expos, and innovation challenges.
            </Typography>
            <Grid container spacing={3}>
              {achievements.map((achievement, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box
                    sx={{
                      overflow: 'hidden',
                      borderRadius: '12px',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.03)',
                        boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
                      },
                    }}
                  >
                    <img
                      src={imageMap[achievement.image]}
                      alt={achievement.title}
                      style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                    />
                    <Box sx={{ p: 2 }}>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {achievement.title}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Box>
      </Container></Box>
  );
};

export default About;
