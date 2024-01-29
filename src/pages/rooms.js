import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { RoomTable } from 'src/sections/rooms/room-table';
import { RoomSearch } from 'src/sections/rooms/room-search';
import { applyPagination } from 'src/utils/apply-pagination';
import RoomModal from 'src/sections/rooms/room-modal';
const now = new Date();

const data = [
  {
    id: '5e887ac47eed253091be10cb',
    type: "Consultation",
    number: '101',
    status: 'Availabe',
    appointments: '3'
  },
  {
    id: '5e887b209c28ac3dd97f6db5',
    type: "Consultation",
    number: '102',
    status: 'Not Available',
    appointments: '7'
  },
  {
    id: '5e887b7602bdbc4dbb234b27',
    type: "Consultation",
    createdAt: subDays(subHours(now, 4), 2).getTime(),
    number: '103',
    status: 'Availabe',
    appointments: '0'
  },
  {
    id: '5e86809283e28b96d2d38537',
    type: "Checkup",
    createdAt: subDays(subHours(now, 11), 2).getTime(),
    number: '104',
    status: 'Not Available',
    appointments: '9'
  },
  {
    id: '5e86805e2bafd54f66cc95c3',
    type: "Checkup",
    createdAt: subDays(subHours(now, 7), 3).getTime(),
    number: '105',
    status: 'Availabe',
    appointments: '6'
  },
  {
    id: '5e887a1fbefd7938eea9c981',
    createdAt: subDays(subHours(now, 5), 4).getTime(),
    type: "Checkup",
    number: '106',
    status: 'Availabe',
    appointments: '5'
  },
  {
    id: '5e887d0b3d090c1b8f162003',
    type: "Consultation",
    createdAt: subDays(subHours(now, 15), 4).getTime(),
    number: '107',
    status: 'Availabe',
    appointments: '4'
  },
  {
    id: '5e88792be2d4cfb4bf0971d9',
    createdAt: subDays(subHours(now, 2), 5).getTime(),
    type: "Consultation",
    number: '108',
    status: 'Availabe',
    appointments: '7'
  },
  {
    id: '5e8877da9a65442b11551975',
    createdAt: subDays(subHours(now, 8), 6).getTime(),
    type: "Consultation",
    number: '109',
    status: 'Availabe',
    appointments: '3'
  },
  {
    id: '5e8680e60cba5019c5ca6fda',
    type: "Consultation",
    number: '110',
    status: 'Availabe',
    appointments: '0'
  }
];

const useCustomers = (page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const useCustomerIds = (customers) => {
  return useMemo(
    () => {
      return customers.map((customer) => customer.id);
    },
    [customers]
  );
};

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const customers = useCustomers(page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);

  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
    },
    []
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <RoomModal
      open={open}
      onClose={handleClose}
      />
      <Head>
        <title>
          Rooms
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="false">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Rooms
                </Typography>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowUpOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Import
                  </Button>
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Export
                  </Button>
                </Stack>
              </Stack>
              <div>
                <Button
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  variant="contained"
                  onClick={() => setOpen(!open)}
                >
                  Add
                </Button>
              </div>
            </Stack>
            <RoomSearch />
            <RoomTable
              count={data.length}
              items={customers}
              onDeselectAll={customersSelection.handleDeselectAll}
              onDeselectOne={customersSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={customersSelection.handleSelectAll}
              onSelectOne={customersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={customersSelection.selected}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
