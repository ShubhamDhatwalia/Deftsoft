import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),

];

export const Dashboard = () => {
    return (
        <div className='bg-gray-300 border-2 p-5'>
            <div>
                <p className='text-[20px] font-bold'>Hello Jane</p>
                <p>Today is Tuesday - 25 Jan</p>
            </div>
            <div className='grid mt-5 grid-cols-3 gap-4'>
                <div className='flex flex-col gap-3 col-span-2'>
                    <div className='p-5 font-semibold w-full bg-white rounded-lg'>
                        <div className='flex justify-between'>
                            <p>Overview</p>
                            <button className='bg-gray-100 p-1 rounded-lg'>Month</button>
                        </div>
                        <div className="flex mt-4 gap-6 justify-between">
                            <div className="flex gap-2">
                                <p>23</p>
                                <p>Total Task</p>
                            </div>
                            <div className="flex gap-2">
                                <p>15</p>
                                <p>Completed Task</p>
                            </div>
                            <div className="flex gap-2">
                                <p>8</p>
                                <p>In Progress</p>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-lg font-semibold flex flex-col gap-4 bg-white p-5'>
                        <p>Task Overview</p>
                        <TableContainer style={{ maxHeight: 250 }} >
                            <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Dessert (100g serving)</TableCell>
                                        <TableCell align="right">Calories</TableCell>
                                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody sx={{ maxHeight: "200px" }} >
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                            <TableCell align="right">{row.carbs}</TableCell>
                                            <TableCell align="right">{row.protein}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div className='rounded-lg font-semibold flex flex-col gap-4 bg-white p-5'>
                        <p> Approaching deadline</p>
                        <div className="grid grid-cols-2 gap-3">
                            <div className='flex p-4 gap-4 bg-gray-100'>
                                <p>30 Jan</p>
                                <div>
                                    <p>1</p>
                                    <p>2</p>
                                    <p>3</p>
                                </div>
                            </div>
                            <div className='flex p-4 gap-4 bg-gray-100'>
                                <p>30 Jan</p>
                                <div>
                                    <p>1</p>
                                    <p>2</p>
                                    <p>3</p>
                                </div>
                            </div>
                            <div className='flex p-4 gap-4 bg-gray-100'>
                                <p>30 Jan</p>
                                <div>
                                    <p>1</p>
                                    <p>2</p>
                                    <p>3</p>
                                </div>
                            </div>
                            <div className='flex p-4 gap-4 bg-gray-100'>
                                <p>30 Jan</p>
                                <div>
                                    <p>1</p>
                                    <p>2</p>
                                    <p>3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-2'>
                    <div className='flex flex-col gap-3 col-span-2'>
                        <div className='p-5 font-semibold w-full bg-white rounded-lg'>
                            <div className='flex justify-between'>
                                <p>Overview</p>
                            </div>
                            <div className="flex flex-col mt-4 gap-2 justify-between">
                                {
                                    [{ date: 1, day: "office day", left: 18 },
                                    {
                                        date: 1, day: "office day", left: 18
                                    },
                                    {
                                        date: 1, day: "office day", left: 18
                                    },
                                    {
                                        date: 1, day: "office day", left: 18
                                    }
                                    ].map((item, index) => {
                                        return <div className="flex gap-2 border-b-2 pb-2 w-full">
                                            <p className=''>12 Feb</p>
                                            <p className='flex-1'>Office Day</p>
                                            <p className=''>18 days left</p>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        <div className='rounded-lg font-semibold flex flex-col gap-4 bg-white p-5'>
                            <div>
                                <div className='flex flex-row gap-6 mt-7 mb-7'>
                                    <div>
                                        <p className='font-bold'>Weekly Progress</p>
                                        <div className='mt-4'>
                                            <p>Start from</p>
                                            <p>Aug 3, 2024</p>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <p>Progress bar</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='rounded-lg font-semibold flex flex-col gap-4 bg-white p-5'>
                            <p className='font-bold'> Apply For Leaves</p>
                            <div className="flex flex-col gap-6">
                                <div className='flex gap-6'>
                                    <div className='m-2'>From</div>
                                    <div className='bg-gray-100 flex-1 p-2'>image</div>
                                </div>
                                <div className='flex gap-6'>
                                    <div className='m-2'>To</div>
                                    <div className='bg-gray-100 flex-1 p-2'>image</div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
