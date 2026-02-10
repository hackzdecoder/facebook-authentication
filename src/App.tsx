import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Stack,
  Alert,
  Chip,
  Divider,
  Grid,
  Fade,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  IconButton,
  InputAdornment,
  LinearProgress
} from '@mui/material';
import {
  Warning,
  VerifiedUser,
  Lock,
  Devices,
  Email,
  ArrowForward,
  Shield,
  Close,
  Visibility,
  VisibilityOff,
  Facebook,
  CheckCircle,
  Cancel,
  LocationOn,
  Computer,
  PhoneAndroid,
  PhoneIphone,
  LaptopMac,
  LaptopWindows
} from '@mui/icons-material';

// Import your Facebook logo
import FacebookLogo from './assets/facebook-logo.svg';

// Facebook theme colors
const FB_BLUE = '#1877F2';
const FB_GREEN = '#42B72A';
const FB_BG = '#F0F2F5';
const FB_CARD_BG = '#FFFFFF';
const FB_TEXT = '#1C1E21';
const FB_TEXT_SECONDARY = '#65676B';
const FB_BORDER = '#DADDE1';
const FB_WARNING = '#FFB800';
const FB_SUCCESS = '#31A24C';
const FB_ERROR = '#FA383E';

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showSecurityActivity, setShowSecurityActivity] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [securityActivity, setSecurityActivity] = useState([
    { id: 1, time: '14:32 UTC', device: 'Windows PC', deviceType: 'windows', location: 'New York, USA', status: 'Suspicious', recognized: false },
    { id: 2, time: '12:15 UTC', device: 'iPhone 13', deviceType: 'iphone', location: 'London, UK', status: 'Recognized', recognized: true },
    { id: 3, time: '10:45 UTC', device: 'MacBook Pro', deviceType: 'mac', location: 'San Francisco, USA', status: 'Recognized', recognized: true },
    { id: 4, time: '09:22 UTC', device: 'Android Phone', deviceType: 'android', location: 'Paris, France', status: 'Suspicious', recognized: false },
  ]);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleLoginClose = () => {
    setShowLoginForm(false);
  };

  const handleLoginSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      handleLoginClose();
      // In a real app, you would handle authentication here
      alert('Login functionality would be implemented here');
    }, 1500);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleReviewSecurityClick = () => {
    setShowSecurityActivity(true);
  };

  const handleRecognizeActivity = (id: any) => {
    setSecurityActivity(prev => prev.map(activity =>
      activity.id === id ? { ...activity, recognized: true, status: 'Recognized' } : activity
    ));
  };

  const handleDenyActivity = (id: any) => {
    setSecurityActivity(prev => prev.map(activity =>
      activity.id === id ? { ...activity, recognized: false, status: 'Blocked' } : activity
    ));
  };

  const handleSecurityActivityClose = () => {
    setShowSecurityActivity(false);
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ py: 2, backgroundColor: FB_BG, minHeight: '100vh' }}>
        <Fade in timeout={800}>
          <Paper
            elevation={2}
            sx={{
              background: FB_CARD_BG,
              borderRadius: 3,
              overflow: 'hidden',
              border: `1px solid ${FB_BORDER}`,
              color: FB_TEXT,
              position: 'relative',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: `linear-gradient(90deg, ${FB_BLUE}, ${FB_GREEN})`,
              }
            }}
          >
            {/* Header Section - Just Facebook Logo */}
            <Box sx={{
              pt: 0,
              pb: 0,
              textAlign: 'center',
              borderBottom: `1px solid ${FB_BORDER}`,
              position: 'relative',
              overflow: 'visible',
            }}>
              {/* Facebook Logo SVG - HUGE but with negative margin */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: -12,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <img
                  src={FacebookLogo}
                  alt="Facebook"
                  style={{
                    width: '380px',
                    height: '380px',
                    objectFit: 'contain'
                  }}
                />
              </Box>

              <Box sx={{
                position: 'relative',
                zIndex: 2,
                mt: -15,
                mb: 2,
              }}>
                <Typography variant="h5" sx={{
                  fontWeight: 700,
                  mb: 0.25,
                  color: FB_TEXT,
                  fontSize: '1.6rem',
                  letterSpacing: '-0.3px',
                  lineHeight: 1.2,
                }}>
                  Account Security Verification
                </Typography>

                <Typography variant="subtitle1" sx={{
                  color: FB_TEXT_SECONDARY,
                  mb: 1,
                  fontSize: '1rem',
                  fontWeight: 400,
                  letterSpacing: '-0.1px',
                  lineHeight: 1.4,
                }}>
                  Unauthorized access attempt detected on your account
                </Typography>

                <Chip
                  icon={<Warning />}
                  label="Immediate Action Required"
                  sx={{
                    background: 'rgba(255, 184, 0, 0.15)',
                    color: '#E65100',
                    border: `2px solid ${FB_WARNING}`,
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    padding: '6px 12px',
                    margin: 2,
                    mb: 3,
                    height: 'auto',
                    letterSpacing: '0.2px',
                    '& .MuiChip-icon': {
                      color: '#E65100',
                      fontSize: '1rem'
                    }
                  }}
                />
              </Box>
            </Box>

            <Divider sx={{ borderColor: FB_BORDER }} />

            {/* Main Alert Section */}
            <Box sx={{ p: 3 }}>
              <Alert
                severity="warning"
                icon={<VerifiedUser />}
                sx={{
                  background: 'rgba(255, 184, 0, 0.1)',
                  border: `1px solid ${FB_WARNING}`,
                  color: FB_TEXT,
                  mb: 3,
                  borderRadius: 2,
                  '& .MuiAlert-icon': { color: FB_WARNING }
                }}
              >
                <Typography variant="h6" sx={{
                  fontWeight: 650,
                  mb: 1,
                  color: FB_TEXT,
                  fontSize: '1.1rem',
                  letterSpacing: '-0.2px',
                  lineHeight: 1.3,
                }}>
                  Security Alert: Suspicious Login Attempt
                </Typography>
                <Typography variant="body2" sx={{
                  color: FB_TEXT_SECONDARY,
                  fontSize: '0.95rem',
                  lineHeight: 1.5,
                  letterSpacing: '0.1px',
                }}>
                  Our system detected an unrecognized login from a new Windows device at 14:32 UTC.
                  This activity appears to be from a different geographic location than your usual pattern.
                </Typography>
              </Alert>

              <Typography variant="body2" sx={{
                color: FB_TEXT_SECONDARY,
                mb: 4,
                lineHeight: 1.7,
                fontSize: '0.95rem',
                letterSpacing: '0.05px',
              }}>
                For your account protection, we've temporarily secured your profile and logged out all active sessions.
                Please verify if this was you or take immediate security measures to prevent unauthorized access.
              </Typography>

              {/* Security Details Grid */}
              <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid size={6}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 1.5,
                    borderRadius: 2,
                    backgroundColor: 'rgba(240, 242, 245, 0.8)',
                    border: `1px solid ${FB_BORDER}`
                  }}>
                    <Box sx={{
                      width: 36,
                      height: 36,
                      borderRadius: 2,
                      background: 'rgba(24, 119, 242, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Devices sx={{ color: FB_BLUE }} />
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{
                        color: FB_TEXT_SECONDARY,
                        fontWeight: 500,
                        fontSize: '0.8rem',
                        letterSpacing: '0.2px',
                        lineHeight: 1.2,
                      }}>
                        Device & Location
                      </Typography>
                      <Typography variant="body2" sx={{
                        fontWeight: 600,
                        color: FB_TEXT,
                        fontSize: '0.95rem',
                        lineHeight: 1.3,
                      }}>
                        Windows PC • New York
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid size={6}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 1.5,
                    borderRadius: 2,
                    backgroundColor: 'rgba(240, 242, 245, 0.8)',
                    border: `1px solid ${FB_BORDER}`
                  }}>
                    <Box sx={{
                      width: 36,
                      height: 36,
                      borderRadius: 2,
                      background: 'rgba(66, 183, 42, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Lock sx={{ color: FB_GREEN }} />
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{
                        color: FB_TEXT_SECONDARY,
                        fontWeight: 500,
                        fontSize: '0.8rem',
                        letterSpacing: '0.2px',
                        lineHeight: 1.2,
                      }}>
                        Security Status
                      </Typography>
                      <Typography variant="body2" sx={{
                        fontWeight: 600,
                        color: FB_TEXT,
                        fontSize: '0.95rem',
                        lineHeight: 1.3,
                      }}>
                        Enhanced Protection Active
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid size={6}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 1.5,
                    borderRadius: 2,
                    backgroundColor: 'rgba(240, 242, 245, 0.8)',
                    border: `1px solid ${FB_BORDER}`
                  }}>
                    <Box sx={{
                      width: 36,
                      height: 36,
                      borderRadius: 2,
                      background: 'rgba(255, 184, 0, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Email sx={{ color: FB_WARNING }} />
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{
                        color: FB_TEXT_SECONDARY,
                        fontWeight: 500,
                        fontSize: '0.8rem',
                        letterSpacing: '0.2px',
                        lineHeight: 1.2,
                      }}>
                        Notification Sent
                      </Typography>
                      <Typography variant="body2" sx={{
                        fontWeight: 600,
                        color: FB_TEXT,
                        fontSize: '0.95rem',
                        lineHeight: 1.3,
                      }}>
                        Security Alert Delivered
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid size={6}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 1.5,
                    borderRadius: 2,
                    backgroundColor: 'rgba(240, 242, 245, 0.8)',
                    border: `1px solid ${FB_BORDER}`
                  }}>
                    <Box sx={{
                      width: 36,
                      height: 36,
                      borderRadius: 2,
                      background: 'rgba(24, 119, 242, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Shield sx={{ color: FB_BLUE }} />
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{
                        color: FB_TEXT_SECONDARY,
                        fontWeight: 500,
                        fontSize: '0.8rem',
                        letterSpacing: '0.2px',
                        lineHeight: 1.2,
                      }}>
                        Account Protection
                      </Typography>
                      <Typography variant="body2" sx={{
                        fontWeight: 600,
                        color: FB_TEXT,
                        fontSize: '0.95rem',
                        lineHeight: 1.3,
                      }}>
                        Real-time Monitoring Active
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>

              {/* Action Buttons */}
              <Stack spacing={2}>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{
                    background: `linear-gradient(90deg, ${FB_BLUE}, #166FE5)`,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 650,
                    fontSize: '1.05rem',
                    textTransform: 'none',
                    letterSpacing: '0.1px',
                    '&:hover': {
                      background: `linear-gradient(90deg, #166FE5, ${FB_BLUE})`,
                      transform: 'translateY(-2px)',
                      boxShadow: `0 8px 20px rgba(24, 119, 242, 0.3)`
                    },
                    transition: 'all 0.3s ease'
                  }}
                  onClick={handleReviewSecurityClick}
                >
                  Review Security Activity Now
                </Button>

                <Button
                  variant="outlined"
                  fullWidth
                  size="large"
                  sx={{
                    borderColor: FB_BORDER,
                    color: FB_TEXT,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: '1rem',
                    letterSpacing: '0.1px',
                    '&:hover': {
                      borderColor: FB_BLUE,
                      background: 'rgba(24, 119, 242, 0.05)'
                    }
                  }}
                  onClick={handleLoginClick}
                >
                  I Recognize This Activity
                </Button>
              </Stack>
            </Box>

            {/* Footer */}
            <Box sx={{
              background: 'rgba(240, 242, 245, 0.8)',
              p: 2,
              borderTop: `1px solid ${FB_BORDER}`,
              textAlign: 'center'
            }}>
              <Typography variant="caption" sx={{
                color: FB_TEXT_SECONDARY,
                fontSize: '0.8rem',
                lineHeight: 1.5,
                letterSpacing: '0.1px',
              }}>
                This is an official security notification from <strong style={{ color: FB_TEXT }}>Facebook Security Center</strong>.
                If you did not authorize this login attempt, please secure your account immediately by changing your password
                and enabling two-factor authentication.
              </Typography>
            </Box>
          </Paper>
        </Fade>


      </Container>

      {/* Login Form Dialog */}
      <Dialog
        open={showLoginForm}
        onClose={handleLoginClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            border: `1px solid ${FB_BORDER}`,
            background: FB_CARD_BG
          }
        }}
      >
        <DialogTitle sx={{
          m: 0,
          p: 3,
          pb: 2,
          borderBottom: `1px solid ${FB_BORDER}`,
          position: 'relative'
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 1
          }}>
            <Facebook sx={{
              fontSize: 40,
              color: FB_BLUE,
              mr: 1
            }} />
            <Typography variant="h6" sx={{
              fontWeight: 700,
              color: FB_TEXT,
              fontSize: '1.5rem'
            }}>
              Facebook
            </Typography>
          </Box>
          <Typography variant="subtitle1" sx={{
            textAlign: 'center',
            color: FB_TEXT_SECONDARY,
            fontSize: '0.95rem'
          }}>
            Confirm Your Identity
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleLoginClose}
            sx={{
              position: 'absolute',
              right: 12,
              top: 12,
              color: FB_TEXT_SECONDARY,
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>

        <form onSubmit={handleLoginSubmit}>
          <DialogContent sx={{ p: 3 }}>
            {isLoading && (
              <LinearProgress sx={{ mb: 2 }} />
            )}

            <Typography variant="body2" sx={{
              mb: 3,
              color: FB_TEXT_SECONDARY,
              textAlign: 'center'
            }}>
              To confirm you recognize this activity, please log in to your account
            </Typography>

            <Stack spacing={2.5}>
              <TextField
                autoFocus
                margin="dense"
                name="email"
                label="Email address or phone number"
                type="email"
                fullWidth
                variant="outlined"
                value={loginData.email}
                onChange={handleInputChange}
                disabled={isLoading}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '&:hover fieldset': {
                      borderColor: FB_BLUE,
                    },
                  }
                }}
              />

              <TextField
                margin="dense"
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                variant="outlined"
                value={loginData.password}
                onChange={handleInputChange}
                disabled={isLoading}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        disabled={isLoading}
                        sx={{ color: FB_TEXT_SECONDARY }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '&:hover fieldset': {
                      borderColor: FB_BLUE,
                    },
                  }
                }}
              />

              <Typography variant="caption" sx={{
                color: FB_TEXT_SECONDARY,
                textAlign: 'center',
                mt: 1
              }}>
                By logging in, you confirm that you recognize the suspicious activity
                and want to restore normal access to your account.
              </Typography>
            </Stack>
          </DialogContent>

          <DialogActions sx={{
            p: 3,
            pt: 2,
            borderTop: `1px solid ${FB_BORDER}`
          }}>
            <Button
              onClick={handleLoginClose}
              disabled={isLoading}
              sx={{
                color: FB_TEXT,
                fontWeight: 600,
                textTransform: 'none'
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              disabled={isLoading || !loginData.email || !loginData.password}
              sx={{
                background: `linear-gradient(90deg, ${FB_BLUE}, #166FE5)`,
                borderRadius: 2,
                fontWeight: 650,
                textTransform: 'none',
                px: 4,
                '&:hover': {
                  background: `linear-gradient(90deg, #166FE5, ${FB_BLUE})`,
                },
                '&:disabled': {
                  background: '#E4E6EB',
                  color: '#BCC0C4'
                }
              }}
            >
              {isLoading ? 'Verifying...' : 'Log In'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* Security Activity Dialog - WITH DEVICE-SPECIFIC ICONS */}
      <Dialog
        open={showSecurityActivity}
        onClose={handleSecurityActivityClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            border: `1px solid ${FB_BORDER}`,
            background: FB_CARD_BG,
            maxHeight: '80vh',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)'
          }
        }}
      >
        <DialogTitle sx={{
          m: 0,
          p: 3,
          pb: 2.5,
          borderBottom: `1px solid ${FB_BORDER}`,
          position: 'relative',
          background: `linear-gradient(135deg, ${FB_BLUE}15, ${FB_GREEN}10)`
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 1.5
          }}>
            <Box sx={{
              width: 52,
              height: 52,
              borderRadius: 3,
              background: `linear-gradient(135deg, ${FB_BLUE}, #166FE5)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2,
              boxShadow: '0 4px 12px rgba(24, 119, 242, 0.3)'
            }}>
              <Shield sx={{
                fontSize: 28,
                color: '#FFFFFF',
              }} />
            </Box>
            <Box>
              <Typography variant="h5" sx={{
                fontWeight: 750,
                color: FB_TEXT,
                fontSize: '1.6rem',
                letterSpacing: '-0.3px',
                background: `linear-gradient(135deg, ${FB_BLUE}, ${FB_GREEN})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Recent Security Activity
              </Typography>
              <Typography variant="subtitle1" sx={{
                textAlign: 'center',
                color: FB_TEXT_SECONDARY,
                fontSize: '0.95rem',
                mt: 0.5,
                fontWeight: 500
              }}>
                Review and verify all recent login attempts to your account
              </Typography>
            </Box>
          </Box>

          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            mt: 2
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: FB_SUCCESS,
                border: `2px solid ${FB_SUCCESS}40`
              }} />
              <Typography variant="caption" sx={{ color: FB_TEXT_SECONDARY, fontWeight: 600 }}>
                Recognized
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: FB_WARNING,
                border: `2px solid ${FB_WARNING}40`
              }} />
              <Typography variant="caption" sx={{ color: FB_TEXT_SECONDARY, fontWeight: 600 }}>
                Suspicious
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: FB_ERROR,
                border: `2px solid ${FB_ERROR}40`
              }} />
              <Typography variant="caption" sx={{ color: FB_TEXT_SECONDARY, fontWeight: 600 }}>
                Blocked
              </Typography>
            </Box>
          </Box>

          <IconButton
            aria-label="close"
            onClick={handleSecurityActivityClose}
            sx={{
              position: 'absolute',
              right: 16,
              top: 16,
              color: FB_TEXT_SECONDARY,
              background: 'rgba(0, 0, 0, 0.04)',
              '&:hover': {
                background: 'rgba(0, 0, 0, 0.08)'
              }
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ p: 3.5 }}>
          <Box sx={{ mb: 3, textAlign: 'center' }}>
            <Typography variant="body2" sx={{
              color: FB_TEXT_SECONDARY,
              fontSize: '0.95rem',
              lineHeight: 1.6,
              maxWidth: '80%',
              mx: 'auto'
            }}>
              Please review each login attempt below. Click <strong>"This Was Me"</strong> for activities you recognize,
              or <strong>"Not Me"</strong> for suspicious attempts.
            </Typography>
          </Box>

          <Stack spacing={2.5}>
            {securityActivity.map((activity) => (
              <Paper
                key={activity.id}
                sx={{
                  p: 3,
                  border: `2px solid ${activity.status === 'Suspicious' ? `${FB_WARNING}40` :
                    activity.status === 'Blocked' ? `${FB_ERROR}40` : `${FB_SUCCESS}40`}`,
                  borderRadius: 3,
                  background: activity.status === 'Suspicious' ?
                    `linear-gradient(135deg, ${FB_WARNING}08, ${FB_WARNING}03)` :
                    activity.status === 'Blocked' ?
                      `linear-gradient(135deg, ${FB_ERROR}08, ${FB_ERROR}03)` :
                      `linear-gradient(135deg, ${FB_SUCCESS}08, ${FB_SUCCESS}03)`,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 8px 24px ${activity.status === 'Suspicious' ? `${FB_WARNING}20` :
                      activity.status === 'Blocked' ? `${FB_ERROR}20` : `${FB_SUCCESS}20`}`,
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '6px',
                    height: '100%',
                    background: activity.status === 'Suspicious' ? FB_WARNING :
                      activity.status === 'Blocked' ? FB_ERROR : FB_SUCCESS
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2.5 }}>
                  <Box sx={{
                    width: 56,
                    height: 56,
                    borderRadius: 3,
                    background: activity.status === 'Suspicious' ?
                      `linear-gradient(135deg, ${FB_WARNING}20, ${FB_WARNING}10)` :
                      activity.status === 'Blocked' ?
                        `linear-gradient(135deg, ${FB_ERROR}20, ${FB_ERROR}10)` :
                        `linear-gradient(135deg, ${FB_SUCCESS}20, ${FB_SUCCESS}10)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2.5,
                    border: `2px solid ${activity.status === 'Suspicious' ? FB_WARNING :
                      activity.status === 'Blocked' ? FB_ERROR : FB_SUCCESS}40`
                  }}>
                    {/* DEVICE-SPECIFIC ICON */}
                    {activity.deviceType === 'windows' ? (
                      <LaptopWindows sx={{
                        fontSize: 30,
                        color: activity.status === 'Suspicious' ? FB_WARNING :
                          activity.status === 'Blocked' ? FB_ERROR : FB_SUCCESS
                      }} />
                    ) : activity.deviceType === 'mac' ? (
                      <LaptopMac sx={{
                        fontSize: 30,
                        color: activity.status === 'Suspicious' ? FB_WARNING :
                          activity.status === 'Blocked' ? FB_ERROR : FB_SUCCESS
                      }} />
                    ) : activity.deviceType === 'iphone' ? (
                      <PhoneIphone sx={{
                        fontSize: 30,
                        color: activity.status === 'Suspicious' ? FB_WARNING :
                          activity.status === 'Blocked' ? FB_ERROR : FB_SUCCESS
                      }} />
                    ) : activity.deviceType === 'android' ? (
                      <PhoneAndroid sx={{
                        fontSize: 30,
                        color: activity.status === 'Suspicious' ? FB_WARNING :
                          activity.status === 'Blocked' ? FB_ERROR : FB_SUCCESS
                      }} />
                    ) : (
                      <Computer sx={{
                        fontSize: 30,
                        color: activity.status === 'Suspicious' ? FB_WARNING :
                          activity.status === 'Blocked' ? FB_ERROR : FB_SUCCESS
                      }} />
                    )}
                  </Box>

                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="subtitle1" sx={{
                        fontWeight: 700,
                        color: FB_TEXT,
                        fontSize: '1.1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5
                      }}>
                        {activity.device}
                        {activity.status === 'Recognized' && (
                          <CheckCircle sx={{ color: FB_SUCCESS, fontSize: 20 }} />
                        )}
                        {activity.status === 'Blocked' && (
                          <Cancel sx={{ color: FB_ERROR, fontSize: 20 }} />
                        )}
                      </Typography>

                      <Chip
                        label={activity.status}
                        size="medium"
                        sx={{
                          background: activity.status === 'Suspicious' ?
                            `linear-gradient(135deg, ${FB_WARNING}25, ${FB_WARNING}15)` :
                            activity.status === 'Blocked' ?
                              `linear-gradient(135deg, ${FB_ERROR}25, ${FB_ERROR}15)` :
                              `linear-gradient(135deg, ${FB_SUCCESS}25, ${FB_SUCCESS}15)`,
                          color: activity.status === 'Suspicious' ? '#E65100' :
                            activity.status === 'Blocked' ? FB_ERROR : FB_SUCCESS,
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          border: `1.5px solid ${activity.status === 'Suspicious' ? FB_WARNING :
                            activity.status === 'Blocked' ? FB_ERROR : FB_SUCCESS}60`,
                          height: 32,
                          px: 1
                        }}
                      />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mt: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box sx={{
                          width: 36,
                          height: 36,
                          borderRadius: 2,
                          background: 'rgba(24, 119, 242, 0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <LocationOn sx={{ fontSize: 18, color: FB_BLUE }} />
                        </Box>
                        <Box>
                          <Typography variant="caption" sx={{
                            color: FB_TEXT_SECONDARY,
                            fontWeight: 600,
                            fontSize: '0.75rem',
                            letterSpacing: '0.3px'
                          }}>
                            Location
                          </Typography>
                          <Typography variant="body2" sx={{
                            fontWeight: 600,
                            color: FB_TEXT,
                            fontSize: '0.95rem'
                          }}>
                            {activity.location}
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box sx={{
                          width: 36,
                          height: 36,
                          borderRadius: 2,
                          background: 'rgba(255, 184, 0, 0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <Box sx={{ fontSize: 18, color: FB_WARNING, fontWeight: 'bold' }}>🕒</Box>
                        </Box>
                        <Box>
                          <Typography variant="caption" sx={{
                            color: FB_TEXT_SECONDARY,
                            fontWeight: 600,
                            fontSize: '0.75rem',
                            letterSpacing: '0.3px'
                          }}>
                            Time
                          </Typography>
                          <Typography variant="body2" sx={{
                            fontWeight: 600,
                            color: FB_TEXT,
                            fontSize: '0.95rem'
                          }}>
                            {activity.time}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                {activity.status === 'Suspicious' && (
                  <Box sx={{
                    display: 'flex',
                    gap: 2,
                    mt: 3,
                    pt: 2.5,
                    borderTop: `1px solid ${FB_BORDER}`
                  }}>
                    <Button
                      variant="contained"
                      startIcon={<CheckCircle />}
                      onClick={() => handleRecognizeActivity(activity.id)}
                      sx={{
                        flex: 1,
                        background: `linear-gradient(135deg, ${FB_SUCCESS}, #2A9D3E)`,
                        borderRadius: 2.5,
                        color: '#FFFFFF',
                        textTransform: 'none',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        py: 1.5,
                        boxShadow: `0 4px 12px ${FB_SUCCESS}40`,
                        '&:hover': {
                          background: `linear-gradient(135deg, #2A9D3E, ${FB_SUCCESS})`,
                          boxShadow: `0 6px 16px ${FB_SUCCESS}50`,
                          transform: 'translateY(-1px)'
                        }
                      }}
                    >
                      This Was Me
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<Cancel />}
                      onClick={() => handleDenyActivity(activity.id)}
                      sx={{
                        flex: 1,
                        background: `linear-gradient(135deg, ${FB_ERROR}, #D32F2F)`,
                        borderRadius: 2.5,
                        color: '#FFFFFF',
                        textTransform: 'none',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        py: 1.5,
                        boxShadow: `0 4px 12px ${FB_ERROR}40`,
                        '&:hover': {
                          background: `linear-gradient(135deg, #D32F2F, ${FB_ERROR})`,
                          boxShadow: `0 6px 16px ${FB_ERROR}50`,
                          transform: 'translateY(-1px)'
                        }
                      }}
                    >
                      Not Me
                    </Button>
                  </Box>
                )}

                {activity.status !== 'Suspicious' && (
                  <Box sx={{
                    mt: 2,
                    pt: 2,
                    borderTop: `1px solid ${FB_BORDER}`,
                    textAlign: 'center'
                  }}>
                    <Typography variant="caption" sx={{
                      color: FB_TEXT_SECONDARY,
                      fontSize: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1
                    }}>
                      {activity.status === 'Recognized' ? (
                        <>
                          <CheckCircle sx={{ fontSize: 16, color: FB_SUCCESS }} />
                          This activity has been verified and approved
                        </>
                      ) : (
                        <>
                          <Cancel sx={{ fontSize: 16, color: FB_ERROR }} />
                          This activity has been blocked and secured
                        </>
                      )}
                    </Typography>
                  </Box>
                )}
              </Paper>
            ))}
          </Stack>
        </DialogContent>

        <DialogActions sx={{
          p: 3,
          pt: 2.5,
          borderTop: `1px solid ${FB_BORDER}`,
          background: 'rgba(240, 242, 245, 0.6)'
        }}>
          <Button
            onClick={handleSecurityActivityClose}
            sx={{
              color: FB_TEXT,
              fontWeight: 650,
              textTransform: 'none',
              fontSize: '0.95rem',
              px: 3,
              py: 1,
              border: `1.5px solid ${FB_BORDER}`,
              borderRadius: 2.5,
              '&:hover': {
                borderColor: FB_BLUE,
                background: 'rgba(24, 119, 242, 0.05)'
              }
            }}
          >
            Close
          </Button>
          <Button
            variant="contained"
            onClick={handleSecurityActivityClose}
            sx={{
              background: `linear-gradient(135deg, ${FB_BLUE}, #166FE5)`,
              borderRadius: 2.5,
              fontWeight: 700,
              textTransform: 'none',
              fontSize: '0.95rem',
              px: 4,
              py: 1,
              boxShadow: '0 4px 12px rgba(24, 119, 242, 0.3)',
              '&:hover': {
                background: `linear-gradient(135deg, #166FE5, ${FB_BLUE})`,
                boxShadow: '0 6px 16px rgba(24, 119, 242, 0.4)',
                transform: 'translateY(-1px)'
              }
            }}
          >
            Done Reviewing
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;