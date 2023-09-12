import Header from './components/Header';
import {BsSearch} from 'react-icons/bs';
import {FaShippingFast} from 'react-icons/fa';
import http from './helpers/http';
import { useState } from 'react';
import EmptyResults from './components/EmptyResults';
import ErrorMessage from './components/ErrorMessage';
import moment from 'moment';

function Homepage() {
  const token = 'TOBGOAV5ULI/QGN8UQCKY9M6SNP+5TZZLN/JDFLXCUSKIDADBZ6MNQWLJPVE9JKY';
  const [noResi, setNoResi] = useState('');
  const [dataTracking, setDataTracking] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const doTracking = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      const {data} = await http(token).get(`/publics/tracking?resi_no=${noResi}`);
      setDataTracking(data.express21);
      console.log(data.express21);
    } catch (error) {
      const message = error?.response?.data?.express21?.status?.error_message;
      setErrorMessage(message);
    }
  };

  return (
    <div className={`bg-white ${dataTracking ? 'h-full' : 'h-screen'} w-full py-10`}>
      <Header />
      <div className='w-full h-full px-[10%] py-16 flex flex-col gap-2 z-10'>
        <form onSubmit={doTracking} className='w-full flex flex-col 
            md:flex-row gap-2 justify-center items-center shadow-lg rounded-xl py-6'>
          <FaShippingFast size={25} className='text-primary' />
          <input 
            onChange={e => setNoResi(e.target.value)}
            type="text" 
            name='trace&track'
            placeholder="Enter your resi number" 
            className="input input-bordered input-primary input-sm w-full max-w-xs text-sm text-black" />
          <button className='btn btn-sm btn-primary text-secondary border-2 border-primary'>
            <BsSearch size={20} />
          </button>
        </form>
        <div className='w-full h-full flex flex-col gap-2 px-[5%] rounded-xl shadow-lg'>
          {!dataTracking && errorMessage === '' && <EmptyResults />}
          {errorMessage && <ErrorMessage errorMessage={errorMessage}/>}
          {dataTracking && <div className="overflow-x-auto pt-6">
            <h1 className='font-bold text-primary text-2xl py-2'>Resi Info</h1>
            <table className="table">
              <thead className='bg-primary text-white'>
                <tr>
                  <th>City Destination</th>
                  <th>City Origin</th>
                  <th>consignee name</th>
                  <th>Shipper name</th>
                  <th>Last Status</th>
                  <th>Resi No</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className='text-black'>{dataTracking.results.resi_info[0].city_dest}</th>
                  <th className='text-black'>{dataTracking.results.resi_info[0].city_origin}</th>
                  <th className='text-black'>{dataTracking.results.resi_info[0].consignee_name}</th>
                  <th className='text-black'>{dataTracking.results.resi_info[0].shipper_name}</th>
                  <th className='text-black'>{dataTracking.results.resi_info[0].last_status_code}</th>
                  <th className='text-black'>{dataTracking.results.resi_info[0].resi_no}</th>
                </tr>
              </tbody>
            </table>
          </div>}
          <hr />
          {dataTracking && <div className="overflow-x-auto py-6">
            <h1 className='font-bold text-primary text-2xl py-2'>Tracking Detail</h1>
            <table className="table">
              <thead className='bg-primary text-white'>
                <tr>
                  <th>Date Process</th>
                  <th>Status</th>
                  <th>Branch Name</th>
                  <th>Branch Code</th>
                  <th>Status By</th>
                  <th>Status Note</th>
                </tr>
              </thead>
              <tbody>
                {dataTracking.results.tracking_status_detail.map(items => (
                  <tr key={`tracking-${items.dateprocess}`}>
                    <th className='text-black'>{items.dateprocess}</th>
                    <th className='text-black'>{items.status}</th>
                    <th className='text-black'>{items.branch_name}</th>
                    <th className='text-black'>{items.branch_code}</th>
                    <th className='text-black'>{items.status_by}</th>
                    <th className='text-black'>{items.status_code}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>}
          <hr />
          {dataTracking && <div className='flex flex-col gap-3 py-6'>
            <h1 className='font-bold text-primary text-2xl'>Shipment Detail</h1>
            <hr className='shodow-lg'/>
            <div className='flex full'>
              <div className='tblHead'>Consignee Address</div>
              <div className='tblBody'>: {dataTracking.results.shipment_detail.consignee_address}</div>
            </div>
            <div className='flex full'>
              <div className='tblHead'>Consignee Name</div>
              <div className='tblBody'>: {dataTracking.results.shipment_detail.consignee_name}</div>
            </div>
            <div className='flex full'>
              <div className='tblHead'>Consignee Phone</div>
              <div className='tblBody'>: {dataTracking.results.shipment_detail.consignee_phone}</div>
            </div>
            <div className='flex full'>
              <div className='tblHead'>Customer Name</div>
              <div className='tblBody'>: {dataTracking.results.shipment_detail.customer_name}</div>
            </div>
            <div className='flex full'>
              <div className='tblHead'>Date Process</div>
              <div className='tblBody'>: {moment(dataTracking.results.shipment_detail.dateprocess).format('MMMM Do YYYY, h:mm:ss')}</div>
            </div>
            <div className='flex full'>
              <div className='tblHead'>Destinaction City</div>
              <div className='tblBody'>: {dataTracking.results.shipment_detail.dest_city}</div>
            </div>
            <div className='flex full'>
              <div className='tblHead'>Fulfilment</div>
              <div className='tblBody'>: {dataTracking.results.shipment_detail.fulfilment}</div>
            </div>
            <div className='flex full'>
              <div className='tblHead'>Goods Value</div>
              <div className='tblBody'>: {dataTracking.results.shipment_detail.goods_value}</div>
            </div>
            <div className='flex full'>
              <div className='tblHead'>Isi</div>
              <div className='tblBody'>: {dataTracking.results.shipment_detail.isi}</div>
            </div>
            <div className='flex full'>
              <div className='tblHead'>Nature of Goods</div>
              <div className='tblBody'>: {dataTracking.results.shipment_detail.nature_of_goods}</div>
            </div>
            <div className='flex full'>
              <div className='tblHead'>Note</div>
              <div className='tblBody'>: {dataTracking.results.shipment_detail.note}</div>
            </div>
            <div className='flex full'>
              <div className='tblHead'>Origin City</div>
              <div className='tblBody'>: {dataTracking.results.shipment_detail.origin_city}</div>
            </div>
            <div className='flex full'>
              <div className='tblHead'>Payment Method</div>
              <div className='tblBody'>: {dataTracking.results.shipment_detail.payment_method}</div>
            </div>
            <div className='flex full'>
              <div className='tblHead'>Resi No</div>
              <div className='tblBody'>: {dataTracking.results.shipment_detail.resi_no}</div>
            </div>
            <div className='flex full'>
              <div className='tblHead'>Service Type</div>
              <div className='tblBody'>: {dataTracking.results.shipment_detail.service_type}</div>
            </div>
            <div className='flex full'>
              <div className='tblHead'>Status</div>
              <div className='tblBody'>: {dataTracking.results.shipment_detail.status}</div>
            </div>
            <div className='flex full'>
              <div className='tblHead'>Total Cod</div>
              <div className='tblBody'>: {dataTracking.results.shipment_detail.total_cod}</div>
            </div>
            <div className='flex full'>
              <div className='tblHead'>Total Chargeable Weight</div>
              <div className='tblBody'>: {dataTracking.results.shipment_detail.ttl_chargeable_weight} gram</div>
            </div>
            <div className='flex full'>
              <div className='tblHead'>Total Piece</div>
              <div className='tblBody'>: {dataTracking.results.shipment_detail.ttl_piece}</div>
            </div>
            <hr />
          </div>}
        </div>
      </div>
    </div>
  );
}

export default Homepage;