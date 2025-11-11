import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import bookingData from "../../assets/data/bookingMockData";
import { bookingTableColumns } from "../../assets/data/TableColumns";

const BookingTable = () => {
  return (
    <div className="tableHeader md:w-[70rem] md:mx-auto h-[90%]">
      <header className="section-title">Booking Information</header>
      <DataGrid
        rows={bookingData}
        columns={bookingTableColumns}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[10, 15, 25]}
        autoPageSize
        pagination
        pageSize={10}
        rowsPerPageOptions={[10, 15, 20]}
        checkboxSelection
        slots={{ toolbar: GridToolbar }}
      />
    </div>
  );
};

export default BookingTable;
