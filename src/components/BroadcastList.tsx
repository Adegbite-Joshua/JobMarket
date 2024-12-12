import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography, Container, TablePagination } from '@mui/material';
import { FilterAltOutlined, SearchOutlined } from '@mui/icons-material';

const dummyData = [
    { date: '12/6/AM/01+02', name: 'Charlotte', surname: '*************', phone: '*************', salary: '₦10,000,000.00', experience: '12 months', jobType: 'Machine Repair', gender: 'Male/Female', status: 'MSME/Stud', lga: 'IKJ - Lag', employmentStatus: 'New' },
    { date: '12/6/AM/01+02', name: 'Charlotte', surname: '*************', phone: '*************', salary: '₦10,000,000.00', experience: '12 months', jobType: 'Machine Repair', gender: 'Male/Female', status: 'MSME/Stud', lga: 'IKJ - Lag', employmentStatus: 'New' },
    { date: '12/6/AM/01+02', name: 'Charlotte', surname: '*************', phone: '*************', salary: '₦10,000,000.00', experience: '12 months', jobType: 'Machine Repair', gender: 'Male/Female', status: 'MSME/Stud', lga: 'IKJ - Lag', employmentStatus: 'New' },
    { date: '12/6/AM/01+02', name: 'Charlotte', surname: '*************', phone: '*************', salary: '₦10,000,000.00', experience: '12 months', jobType: 'Machine Repair', gender: 'Male/Female', status: 'MSME/Stud', lga: 'IKJ - Lag', employmentStatus: 'New' },
    { date: '12/6/AM/01+02', name: 'Charlotte', surname: '*************', phone: '*************', salary: '₦10,000,000.00', experience: '12 months', jobType: 'Machine Repair', gender: 'Male/Female', status: 'MSME/Stud', lga: 'IKJ - Lag', employmentStatus: 'New' },
    { date: '12/6/AM/01+02', name: 'Charlotte', surname: '*************', phone: '*************', salary: '₦10,000,000.00', experience: '12 months', jobType: 'Machine Repair', gender: 'Male/Female', status: 'MSME/Stud', lga: 'IKJ - Lag', employmentStatus: 'New' },
    { date: '12/6/AM/01+02', name: 'Charlotte', surname: '*************', phone: '*************', salary: '₦10,000,000.00', experience: '12 months', jobType: 'Machine Repair', gender: 'Male/Female', status: 'MSME/Stud', lga: 'IKJ - Lag', employmentStatus: 'New' },
    { date: '12/6/AM/01+02', name: 'Charlotte', surname: '*************', phone: '*************', salary: '₦10,000,000.00', experience: '12 months', jobType: 'Machine Repair', gender: 'Male/Female', status: 'MSME/Stud', lga: 'IKJ - Lag', employmentStatus: 'New' },
    { date: '12/6/AM/01+02', name: 'Charlotte', surname: '*************', phone: '*************', salary: '₦10,000,000.00', experience: '12 months', jobType: 'Machine Repair', gender: 'Male/Female', status: 'MSME/Stud', lga: 'IKJ - Lag', employmentStatus: 'New' },
    { date: '12/6/AM/01+02', name: 'Charlotte', surname: '*************', phone: '*************', salary: '₦10,000,000.00', experience: '12 months', jobType: 'Machine Repair', gender: 'Male/Female', status: 'MSME/Stud', lga: 'IKJ - Lag', employmentStatus: 'New' },
    // Add more dummy data as needed
];

const BroadcastList: React.FC = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(Math.round(dummyData.length / 4));

    const handleChangePage = (event: unknown, newPage: number) => {
        console.log(event);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <Container>
            <Box sx={{ mt: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Broadcast List
                </Typography>
                <Box display="flex" justifyContent="space-between" mb={2}>
                    <div className="relative flex items-center border w-80 bg-white">
                        <SearchOutlined className="absolute left-3 text-gray-500 text-2xl" />
                        <input
                            type="search"
                            className="w-full pl-12 bg-white pr-4 py-2 text-sm border-none focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                            placeholder="Search for job ppp, employment status"
                        />
                    </div>

                    <button className='border border-slate-400 text-slate-400 rounded-xl items-center flex p-1 px-3 h-auto'>
                        <FilterAltOutlined />
                        <span className='text-xl'>Filter</span>
                    </button>
                </Box>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Time/Date</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Surname</TableCell>
                                <TableCell>Telephone</TableCell>
                                <TableCell>Salary</TableCell>
                                <TableCell>Experience</TableCell>
                                <TableCell>Job Type</TableCell>
                                <TableCell>Gender</TableCell>
                                <TableCell>Employment Status</TableCell>
                                <TableCell>LGA</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dummyData.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell><span className='text-red-500'>{row.date}</span></TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.surname}</TableCell>
                                    <TableCell>{row.phone}</TableCell>
                                    <TableCell>{row.salary}</TableCell>
                                    <TableCell>{row.experience}</TableCell>
                                    <TableCell>{row.jobType}</TableCell>
                                    <TableCell><span className='text-blue-500'>{row.gender}</span></TableCell>
                                    <TableCell><span className='text-blue-500'>{row.status}</span></TableCell>
                                    <TableCell><span className='text-blue-500'>{row.lga}</span></TableCell>
                                    <TableCell><span className='text-blue-500 py-1 px-4 rounded-xl border border-blue-600'>{row.employmentStatus}</span></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[Math.round(dummyData.length / 4), Math.round(dummyData.length / 3), Math.round(dummyData.length / 2), dummyData.length]}
                        component="div"
                        count={dummyData.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableContainer>
            </Box>
        </Container>
    );
};

export default BroadcastList;
