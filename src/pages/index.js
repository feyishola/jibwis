import Head from "next/head";
import { useState } from "react";
import { Box, Button, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Stack } from "@mui/system";

const dummyAppointments = [
  {
    transactionId: '123abc',
    patientId: "id3",
    doctorId: "id4",
    roomId: 105,
    start: new Date('2024-01-15T08:00:00Z'),
    end: new Date('2024-01-15T09:00:00Z'),
    purpose: 'Regular Checkup',
    status: 'Confirmed',
    notes: 'No special notes',
    recurrence: {
      frequency: 'Weekly',
      endDate: new Date('2024-02-29T00:00:00Z'),
    },
  },
  {
    transactionId: '456def',
    patientId: "id1",
    doctorId: "id2",
    roomId: 102,
    start: new Date('2024-02-01T14:30:00Z'),
    end: new Date('2024-02-01T15:30:00Z'),
    purpose: 'Dental Cleaning',
    status: 'Completed',
    notes: 'Patient has no known allergies.',
    recurrence: null,
  },
]
function Page() {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  return (
    <>
      <Head>
        <title>Home </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >

        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid xs={8.4}>
              <Typography
              align="center" variant="h5">Appointments</Typography>
              {
                dummyAppointments.length > 0 ? dummyAppointments.map((appointment) => (
                  <Card
                  key={appointment.transactionId}
                  sx={{
                    minWidth: 400,
                    margin: '16px',
                    cursor: 'pointer',
                    boxShadow: "5px 10px red",
                    ...(selectedAppointment && selectedAppointment.transactionId === appointment.transactionId
                      ? { backgroundColor: '#f0f0f0' }
                      : {})
                  }}
                    onClick={() => setSelectedAppointment(appointment)}>
                    <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography variant="h6" color="primary">
                        {appointment.purpose}
                      </Typography>
                      <Stack spacing={2}>
                        <Typography variant="body2" color="textSecondary">
                          Date:{appointment.start.toLocaleString().split(",")[0]}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          Time:{appointment.start.toLocaleString().split(",")[1]}
                        </Typography>
                      </Stack>

                    </CardContent>
                  </Card>
                )) : <Box
                  sx={{
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: "100%"
                  }}
                >
                  <Typography
                    variant="body1"
                  >
                    Appointments  will show here
                  </Typography>
                </Box>
              }
            </Grid>
            <Grid xs={3.6}>
              {selectedAppointment ? (
                <Box
                  sx={{
                    minWidth: 350,
                    height: 500,
                    padding: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around'
                  }}
                >
                  <Typography
                    variant="h5"
                  >
                    Appointment Information
                  </Typography>
                  <Typography variant="h6" color="primary">
                    {selectedAppointment.purpose}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Transaction ID: {selectedAppointment.transactionId}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Doctor ID: {selectedAppointment.doctorId}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Room ID: {selectedAppointment.roomId}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Start Time: {selectedAppointment.start.toLocaleString()}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    End Time: {selectedAppointment.end.toLocaleString()}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Status: {selectedAppointment.status}
                  </Typography>
                  {selectedAppointment.recurrence && (
                    <Typography variant="body2" color="textSecondary">
                      Recurrence Frequency: {selectedAppointment.recurrence.frequency}
                    </Typography>
                  )}
                  <Stack
                    direction="row"
                    spacing={2}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        width: "35%"
                      }}
                    >
                      Reschedule
                    </Button>
                    <Button
                      color="error"
                      variant="contained"
                      sx={{
                        width: "35%"
                      }}
                    >
                      Cancel
                    </Button>
                  </Stack>

                </Box>

              ) : <Box
                sx={{
                  display: "flex",
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: "100%"
                }}
              >
                <Typography
                  variant="body1"
                >
                  Selected appointment information will show here
                </Typography>
              </Box>}
            </Grid>
          </Grid>

        </Container>
      </Box>
    </>
  )
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default Page;