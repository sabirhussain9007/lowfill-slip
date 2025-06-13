import React from 'react';
import { useSnackbar } from 'notistack';

export default function Form({ formData, onChange, onSubmit }) {
  const { enqueueSnackbar } = useSnackbar();

 const handleSubmit = (e) => {
    e.preventDefault();

    // Destructure formData to get individual fields
    const {
        date,
        month,
        outletName,
        outletCode,
        routeName,
        routeCode,
        zone,
        crName,
        crCode,
        adrName,
        tdmName,
        smName,
        lastYearSales,
        currentYearSales,
        expBox,
        regMtBot, // Optional
        regMtCase, // Optional
        slcMtBot, // Optional
        slcMtCase, // Optional
        stingMtBot, // Optional
        stingMtCase, // Optional
        regular250Bottle,// Optional
        regular250Case, // Optional
        sting240Bottle, // Optional
        sting249Case, // Optional
        slice240Bottle, // Optional
        slice240Case, // Optional
        can250Bottle, // Optional
        can250Case, // Optional
        pet345Bottle, // Optional
        pet345Case, // Optional
        pet500Bottle, // Optional
        pet500Case, // Optional
        pet1000Bottle, // Optional
        pet1000Case, // Optional
        pet1250Bottle, // Optional
        pet1250Case, // Optional
        pet1500Bottle, // Optional
        pet1500Case, // Optional
        pet2250Bottle, // Optional
        pet2250Case, // Optional
        can300Bottle, // Optional
        can300Case, // Optional 
        sting500Bottle, // Optional
        sting500Case, // Optional
        sting300Bottle, // Optional
        sting300Case, // Optional
        stingCanBottle, // Optional
        stingCanCase, // Optional
        slice355Bottle, // Optional
        slice355Case, // Optional
        slicePet1000Bottle, // Optional
        slicePet1000Case, // Optional
        sliceTetra1000Bottle, // Optional
        sliceTetra1000Case, // Optional
        slicetetra200Bottle, // Optional
        slicetetra200Case, // Optional
        aquafina330Bottle, // Optional
        aquafina330Case, // Optional
        aquafina500Bottle, // Optional
        aquafina500Case, // Optional
        aquafina1500Bottle, // Optional
        aquafina1500Case, // Optional
        gatorade500Bottle, // Optional
        gatorade500Case, // Optional
        revive300Bottle, // Optional
        revive300Case, // Optional

    } = formData;

    // Validate form data
    if (
        !date ||
        !month.trim() ||
        !outletName.trim() ||
        !outletCode.trim() ||
        !routeName.trim() ||
        !routeCode.trim() ||
        !zone.trim() ||
        !crName.trim() ||
        !crCode.trim() ||
        !adrName.trim() ||
        !tdmName.trim() ||
        !smName.trim() ||
        !lastYearSales.trim() ||
        !currentYearSales.trim() ||
        !expBox.trim() ||

        // Optional fields are not validated
        (regMtBot && isNaN(regMtBot)) ||
        (regMtCase && isNaN(regMtCase)) ||
        (slcMtBot && isNaN(slcMtBot)) ||
        (slcMtCase && isNaN(slcMtCase)) ||
        (stingMtBot && isNaN(stingMtBot)) ||
        (stingMtCase && isNaN(stingMtCase)) ||
        (regular250Bottle && isNaN(regular250Bottle)) ||
        (regular250Case && isNaN(regular250Case)) ||
        (sting240Bottle && isNaN(sting240Bottle)) ||
        (sting249Case && isNaN(sting249Case)) ||
        (slice240Bottle && isNaN(slice240Bottle)) ||
        (slice240Case && isNaN(slice240Case)) ||
        (can250Bottle && isNaN(can250Bottle)) ||
        (can250Case && isNaN(can250Case)) ||
        (pet345Bottle && isNaN(pet345Bottle)) ||
        (pet345Case && isNaN(pet345Case)) ||
        (pet500Bottle && isNaN(pet500Bottle)) ||
        (pet500Case && isNaN(pet500Case)) ||
        (pet1000Bottle && isNaN(pet1000Bottle)) ||
        (pet1000Case && isNaN(pet1000Case)) ||
        (pet1250Bottle && isNaN(pet1250Bottle)) ||
        (pet1250Case && isNaN(pet1250Case)) ||
        (pet1500Bottle && isNaN(pet1500Bottle)) ||
        (pet1500Case && isNaN(pet1500Case)) ||
        (pet2250Bottle && isNaN(pet2250Bottle)) ||
        (pet2250Case && isNaN(pet2250Case)) ||
        (can300Bottle && isNaN(can300Bottle)) ||
        (can300Case && isNaN(can300Case)) ||
        (sting500Bottle && isNaN(sting500Bottle)) ||
        (sting500Case && isNaN(sting500Case)) ||
        (sting300Bottle && isNaN(sting300Bottle)) ||
        (sting300Case && isNaN(sting300Case)) ||
        (stingCanBottle && isNaN(stingCanBottle)) ||
        (stingCanCase && isNaN(stingCanCase)) ||
        (slice355Bottle && isNaN(slice355Bottle)) ||
        (slice355Case && isNaN(slice355Case)) ||
        (slicePet1000Bottle && isNaN(slicePet1000Bottle)) ||
        (slicePet1000Case && isNaN(slicePet1000Case)) ||
        (sliceTetra1000Bottle && isNaN(sliceTetra1000Bottle)) ||
        (sliceTetra1000Case && isNaN(sliceTetra1000Case)) ||
        (slicetetra200Bottle && isNaN(slicetetra200Bottle)) ||
        (slicetetra200Case && isNaN(slicetetra200Case)) ||
        (aquafina330Bottle && isNaN(aquafina330Bottle)) ||
        (aquafina330Case && isNaN(aquafina330Case)) ||
        (aquafina500Bottle && isNaN(aquafina500Bottle)) ||
        (aquafina500Case && isNaN(aquafina500Case)) ||
        (aquafina1500Bottle && isNaN(aquafina1500Bottle)) ||
        (aquafina1500Case && isNaN(aquafina1500Case)) ||
        (gatorade500Bottle && isNaN(gatorade500Bottle)) ||
        (gatorade500Case && isNaN(gatorade500Case)) ||
        (revive300Bottle && isNaN(revive300Bottle)) ||
        (revive300Case && isNaN(revive300Case))
    ) {
        // Show error notification if any required field is empty
        enqueueSnackbar('Please fill in all fields', { variant: 'error' });
        return;
    }

    // Show success notification
    enqueueSnackbar('Data saved successfully!', { variant: 'success' });

    // Call onSubmit with formData instead of the event
    onSubmit(formData);
};


  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow flex flex-col" noValidate>



      {/* DATE and INPUT DATE row */}
      <div className="grid grid-cols-12 gap-4 mb-4">
        <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="date">DATE</label>
        <div className="col-span-8">
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={onChange}
            required
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
        </div>
      </div>


      {/* DATE and INPUT Month row */}
      <div className="grid grid-cols-12 gap-4 mb-4">
        <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="date">MONTH</label>
        <div className="col-span-8">
          <input
            type="month"
            id="month"
            name="month"
            value={formData.month}
            onChange={onChange}
            required
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
        </div>
      </div>



      {/* OUTLET NAME row */}
      <div className="grid grid-cols-12 gap-4 mb-4">
        <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="outlet-name">OUTLET NAME</label>
        <div className="col-span-8">
          <input
            type="text"
            id="outlet-name"
            name="outletName"
            value={formData.outletName}
            onChange={onChange}
            required
            placeholder="Enter outlet name"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
        </div>
      </div>

      
      {/* OUTLET CODE row */}
      <div className="grid grid-cols-12 gap-4 mb-4">
        <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="outlet-code">OUTLET CODE</label>
        <div className="col-span-8">
          <input
            type="text"
            id="outlet-code"
            name="outletCode"
            value={formData.outletCode}
            onChange={onChange}
            required
            placeholder="Enter outlet code"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
        </div>
      </div>


      {/* ROUTE NAME row */}
      <div className="grid grid-cols-12 gap-4 mb-4">
        <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="route-name">ROUTE NAME</label>
        <div className="col-span-8">
          <input
            type="text"
            id="route-name"
            name="routeName"
            value={formData.routeName}
            onChange={onChange}
            required
            placeholder="Enter route name"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
        </div>
      </div>

      {/* ROUTE CODE row */}
      <div className="grid grid-cols-12 gap-4 mb-4">
        <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="route-code">ROUTE CODE</label>
        <div className="col-span-8">
          <input
            type="text"
            id="route-code"
            name="routeCode"
            value={formData.routeCode}
            onChange={onChange}
            required
            placeholder="Enter route code"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
        </div>
      </div>

      {/* ZONE row */}
      <div className="grid grid-cols-12 gap-4 mb-4">
        <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="zone">ZONE</label>
        <div className="col-span-8">
          <input
            type="text"
            id="zone"
            name="zone"
            value={formData.zone}
            onChange={onChange}
            required
            placeholder="Enter zone"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
        </div>
      </div>

      {/* CR NAME row */}
      <div className="grid grid-cols-12 gap-4 mb-4">
        <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="cr-name">CR NAME</label>
        <div className="col-span-8">
          <input
            type="text"
            id="cr-name"
            name="crName"
            value={formData.crName}
            onChange={onChange}
            required
            placeholder="Enter CR name"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
        </div> 
      </div>

      {/* CR CODE row */}
      <div className="grid grid-cols-12 gap-4 mb-4">
        <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="cr-code">CR CARD#</label>
        <div className="col-span-8">
          <input
            type="number"
            id="cr-code"
            name="crCode"
            value={formData.crCode}
            onChange={onChange}
            required
            placeholder="Enter CR code"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
        </div>
      </div>

      {/* ADR NAME row */}
      <div className="grid grid-cols-12 gap-4 mb-4">
        <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="adr-name">ADR NAME</label>
        <div className="col-span-8">
          <input
            type="text"
            id="adr-name"
            name="adrName"
            value={formData.adrName}
            onChange={onChange}
            required
            placeholder="Enter ADR name"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
        </div>
      </div>

      {/* TDM NAME row */}
      <div className="grid grid-cols-12 gap-4 mb-4">
        <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="tdm-name">TDM NAME</label>
        <div className="col-span-8">
          <input
            type="text"
            id="tdm-name"
            name="tdmName"
            value={formData.tdmName}
            onChange={onChange}
            required
            placeholder="Enter TDM name"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
        </div>
      </div>

      {/* SM NAME row */}
      <div className="grid grid-cols-12 gap-4 mb-4">
        <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="sm-name">SM/RSM NAME</label>
        <div className="col-span-8">
          <input
            type="text"
            id="sm-name"
            name="smName"
            value={formData.smName}
            onChange={onChange}
            required
            placeholder="Enter SM name"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
        </div>
      </div>

      {/* LAST YEAR SALES row */}
      <div className="grid grid-cols-12 gap-4 mb-4">
        <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="last-year-sales">LAST YEAR SALES</label>
        <div className="col-span-8">
          <input
            type="number"
            id="last-year-sales"
            name="lastYearSales"
            value={formData.lastYearSales}
            onChange={onChange}
            required
            placeholder="Enter last year sales"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
        </div>
      </div>

      {/* CURRENT YEAR SALES row */}
      <div className="grid grid-cols-12 gap-4 mb-4">
        <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="current-year-sales">CURRENT YEAR SALES</label>
        <div className="col-span-8">
          <input
            type="number"
            id="current-year-sales"
            name="currentYearSales"
            value={formData.currentYearSales}
            onChange={onChange}
            required
            placeholder="Enter current year sales"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
        </div>
      </div>

      {/* EXP BOX row */}

      <div className="grid grid-cols-12 gap-4 mb-4">
        <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="exp-box">EXP BOX</label>
        <div className="col-span-8">
          <select
            id="exp-box"
            name="expBox"
            value={formData.expBox}
            onChange={onChange}
            required
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          >
            <option value="">Select an option</option>
            <option value="No">No</option>
            <option value="CR ACC:">CR ACCOUNT</option>
            <option value="OPEN LOWFILL">OPEN LOWFILL</option>
          </select>
        </div>
      </div>


      <div className="grid grid-cols-12 gap-4 mb-4" >
          <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="regMtBot">REG 250ML EMPTY</label>
          <div className="col-span-4">
            <input type="number" 
            id= "regMtBot"
            name="regMtBot"
            value={formData.regMtBot}
            onChange={onChange}
            placeholder='Bottles'
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
          <div className="col-span-4">
            <input type="number" 
            id='regMtCase'
            name="regMtCase"
            value={formData.regMtCase}
            onChange={onChange} 
            placeholder="Cases" 
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
        </div>

      <div className="grid grid-cols-12 gap-4 mb-4">
          <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="slcMtBot">SLICE EMPTY</label> 
          <div className="col-span-4">
            <input type="number"
            id="slcMtBot"
            name="slcMtBot"
            value={formData.slcMtBot}
            onChange={onChange}
            placeholder="Bottles"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
          <div className="col-span-4">
            <input type="number"
            id="slcMtCase"
            name="slcMtCase"
            value={formData.slcMtCase}
            onChange={onChange}
            placeholder="Cases"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
        </div>

      <div className="grid grid-cols-12 gap-4 mb-4">
          <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="stingMtBot">STING EMPTY</label>
          <div className="col-span-4">
            <input type="number"
            id="stingMtBot"
            name="stingMtBot"
            value={formData.stingMtBot}
            onChange={onChange}
            placeholder="Bottles"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
          <div className="col-span-4">
            <input type="number"
            id="stingMtCase"
            name="stingMtCase"
            value={formData.stingMtCase}
            onChange={onChange}
            placeholder="Cases"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
        </div>

      <div className="grid grid-cols-12 gap-4 mb-4">
          <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="regular250Bottle">REG 250ML CSD</label>
          <div className="col-span-4">  
            <input type="number"
            id="regular250Bottle"
            name="regular250Bottle"
            value={formData.regular250Bottle} 
            onChange={onChange}
            placeholder="Bottles"
            className='bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out' />
          </div>
          <div className="col-span-4">
            <input type="number"
            id="regular250Case"
            name="regular250Case"
            value={formData.regular250Case}
            onChange={onChange}
            placeholder="Cases"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
        </div>

      <div className="grid grid-cols-12 gap-4 mb-4">
          <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="sting240Bottle">REG STING 240ML</label>
          <div className="col-span-4">
            <input type="number"
            id="sting240Bottle"
            name="sting240Bottle"
            value={formData.sting240Bottle}
            onChange={onChange}
            placeholder="Bottles"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
          <div className="col-span-4">
            <input type="number"
            id="sting249Case"
            name="sting249Case"
            value={formData.sting249Case}
            onChange={onChange}
            placeholder="Cases"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
        </div>

      <div className="grid grid-cols-12 gap-4 mb-4">
          <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="slice240Bottle">REG SLICE 240ML </label>
          <div className="col-span-4">
            <input type="number"
            id="slice240Bottle"
            name="slice240Bottle"
            value={formData.slice240Bottle}
            onChange={onChange}
            placeholder="Bottles"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
          <div className="col-span-4">
            <input type="number"
            id="slice240Case"
            name="slice240Case"
            value={formData.slice240Case}
            onChange={onChange}
            placeholder="Cases"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
         </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-4">
          <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="can250Bottle">CAN 250ML </label>
          <div className="col-span-4">
            <input type="number"
            id="can250Bottle"
            name="can250Bottle"
            value={formData.can250Bottle}
            onChange={onChange}
            placeholder="Bottles"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
          <div className="col-span-4">
            <input type="number"
            id="can250Case"
            name="can250Case"
            value={formData.can250Case}
            onChange={onChange}
            placeholder="Cases"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>  
      </div>
      <div className="grid grid-cols-12 gap-4 mb-4">
          <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="pet345Bottle">PET 345ML CSD</label>
          <div className="col-span-4">
            <input type="number"
            id="pet345Bottle"
            name="pet345Bottle"
            value={formData.pet345Bottle}
            onChange={onChange}
            placeholder="Bottles"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
          <div className="col-span-4">
            <input type="number"
            id="pet345Case"
            name="pet345Case"
            value={formData.pet345Case}
            onChange={onChange}
            placeholder="Cases"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
      </div>
      <div className="grid grid-cols-12 gap-4 mb-4">
          <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="pet500Bottle">PET 500ML CSD</label>
          <div className="col-span-4">
            <input type="number"
            id="pet500Bottle"
            name="pet500Bottle"
            value={formData.pet500Bottle}
            onChange={onChange}
            placeholder="Bottles"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
          <div className="col-span-4">
            <input type="number"
            id="pet500Case"
            name="pet500Case"
            value={formData.pet500Case}
            onChange={onChange}
            placeholder="Cases"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-4">
          <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="pet1000Bottle">PET 1000ML CSD</label>
          <div className="col-span-4">
            <input type="number"
            id="pet1000Bottle"
            name="pet1000Bottle"
            value={formData.pet1000Bottle}
            onChange={onChange}
            placeholder="Bottles"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
          <div className="col-span-4">
            <input type="number"
            id="pet1000Case"
            name="pet1000Case"
            value={formData.pet1000Case}
            onChange={onChange}
            placeholder="Cases"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-4">
          <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="pet1250Bottle">PET 1250ML CSD</label>
          <div className="col-span-4">
            <input type="number"
            id="pet1250Bottle"
            name="pet1250Bottle"
            value={formData.pet1250Bottle}
            onChange={onChange}
            placeholder="Bottles"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
          <div className="col-span-4">
            <input type="number"
            id="pet1250Case"
            name="pet1250Case"
            value={formData.pet1250Case}
            onChange={onChange}
            placeholder="Cases"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-4">
          <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="pet1500Bottle">PET 1500ML CSD</label>  
          <div className="col-span-4">
            <input type="number"
            id="pet1500Bottle"
            name="pet1500Bottle"
            value={formData.pet1500Bottle}
            onChange={onChange}
            placeholder="Bottles"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
          <div className="col-span-4">
            <input type="number"
            id="pet1500Case"
            name="pet1500Case"
            value={formData.pet1500Case}
            onChange={onChange}
            placeholder="Cases"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-4">
          <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="pet2250Bottle">PET 2250ML CSD</label>
          <div className="col-span-4">
            <input type="number"
            id="pet2250Bottle"
            name="pet2250Bottle"
            value={formData.pet2250Bottle}
            onChange={onChange}
            placeholder="Bottles"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
          <div className="col-span-4">
            <input type="number"
            id="pet2250Case"
            name="pet2250Case"
            value={formData.pet2250Case}
            onChange={onChange}
            placeholder="Cases"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-4">
          <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="can300Bottle">CAN 300ML </label>
          <div className="col-span-4">
            <input type="number"
            id="can300Bottle"
            name="can300Bottle"
            value={formData.can300Bottle}
            onChange={onChange}
            placeholder="Bottles"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" /> 
          </div>
          <div className="col-span-4">
            <input type="number"
            id="can300Case"
            name="can300Case"
            value={formData.can300Case}
            onChange={onChange}
            placeholder="Cases"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-4">
          <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="sting500Bottle">PET STING 500ML</label>
          <div className="col-span-4">
            <input type="number"
            id="sting500Bottle"
            name="sting500Bottle"
            value={formData.sting500Bottle}
            onChange={onChange}
            placeholder="Bottles"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
          <div className="col-span-4">
            <input type="number"
            id="sting500Case"
            name="sting500Case"
            value={formData.sting500Case}
            onChange={onChange}
            placeholder="Cases"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-4">
          <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="sting300Bottle">PET STING 300ML</label>
          <div className="col-span-4">
            <input type="number"
            id="sting300Bottle"
            name="sting300Bottle"
            value={formData.sting300Bottle}
            onChange={onChange}
            placeholder="Bottles"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
          <div className="col-span-4">
            <input type="number"
            id="sting300Case"
            name="sting300Case"
            value={formData.sting300Case}
            onChange={onChange}
            placeholder="Cases"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-4">
          <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="stingCanBottle">STING CAN 250ML</label>
          <div className="col-span-4">
            <input type="number"
            id="stingCanBottle"
            name="stingCanBottle"
            value={formData.stingCanBottle}
            onChange={onChange}
            placeholder="Bottles"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
          <div className="col-span-4">
            <input type="number"
            id="stingCanCase"
            name="stingCanCase"
            value={formData.stingCanCase}
            onChange={onChange}
            placeholder="Cases"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-4">
          <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="slice355Bottle">SLICE 355 ML</label>
          <div className="col-span-4">
            <input type="number"
            id="slice355Bottle"
            name="slice355Bottle"
            value={formData.slice355Bottle}
            onChange={onChange}
            placeholder="Bottles"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
          </div>
          <div className="col-span-4">
            <input type="number"
            id="slice355Case"
            name="slice355Case"
            value={formData.slice355Case}
            onChange={onChange}
            placeholder="Cases"
            className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
      </div>
    </div>


      <div className="grid grid-cols-12 gap-4 mb-4">
      <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="slicePet1000Bottle">SLICE PET 1000 ML</label>
      <div className="col-span-4">
        <input type="number"
        id="slicePet1000Bottle"
        name="slicePet1000Bottle"
        value={formData.slicePet1000Bottle}
        onChange={onChange}
        placeholder="Bottles"
        className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
      </div>
      <div className="col-span-4">
        <input type="number"
        id="slicePet1000Case"
        name="slicePet1000Case"
        value={formData.slicePet1000Case}
        onChange={onChange}
        placeholder="Cases"
        className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
      </div>
    </div>


<div className="grid grid-cols-12 gap-4 mb-4">
      <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="sliceTetra1000Bottle">SLICE TETRA 1000 ML</label>
      <div className="col-span-4">
        <input type="number"
        id="sliceTetra1000Bottle"
        name="sliceTetra1000Bottle"
        value={formData.sliceTetra1000Bottle}
        onChange={onChange}
        placeholder="Bottles"
        className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
      </div>
      <div className="col-span-4">
        <input type="number"
        id="sliceTetra1000Case"
        name="sliceTetra1000Case"
        value={formData.sliceTetra1000Case}
        onChange={onChange}
        placeholder="Cases"
        className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
      </div>
    </div>

    <div className="grid grid-cols-12 gap-4 mb-4">
      <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="slicetetra200Bottle">SLICE TETRA 200 ML</label>
      <div className="col-span-4">
        <input type="number"
        id="slicetetra200Bottle"
        name="slicetetra200Bottle"
        value={formData.slicetetra200Bottle}
        onChange={onChange}
        placeholder="Bottles"
        className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
      </div>
      <div className="col-span-4">
        <input type="number"
        id="slicetetra200Case"
        name="slicetetra200Case"
        value={formData.slicetetra200Case}
        onChange={onChange}
        placeholder="Cases"
        className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
      </div>
    </div>

    <div className="grid grid-cols-12 gap-4 mb-4">
      <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="aquafina330Bottle">AQUAFINA 330 ML</label>
      <div className="col-span-4">
        <input type="number"
        id="aquafina330Bottle"
        name="aquafina330Bottle"
        value={formData.aquafina330Bottle}
        onChange={onChange}
        placeholder="Bottles"
        className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
      </div>
      <div className="col-span-4">
        <input type="number"
        id="aquafina330Case"
        name="aquafina330Case"
        value={formData.aquafina330Case}
        onChange={onChange}
        placeholder="Cases"
        className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
      </div>
    </div>

     <div className="grid grid-cols-12 gap-4 mb-4">
      <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="aquafina500Bottle">AQUAFINA 500 ML</label>
      <div className="col-span-4">
        <input type="number"
        id="aquafina500Bottle"
        name="aquafina500Bottle"
        value={formData.aquafina500Bottle}
        onChange={onChange}
        placeholder="Bottles"
        className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
      </div>
      <div className="col-span-4">  
        <input type="number"
        id="aquafina500Case"
        name="aquafina500Case"
        value={formData.aquafina500Case}
        onChange={onChange}
        placeholder="Cases"
        className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
      </div>
    </div>

    <div className="grid grid-cols-12 gap-4 mb-4">
      <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="aquafina1500Bottle">AQUAFINA 1500 ML</label>
      <div className="col-span-4">
        <input type="number"
        id="aquafina1500Bottle"
        name="aquafina1500Bottle"
        value={formData.aquafina1500Bottle}
        onChange={onChange}
        placeholder="Bottles"
        className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
      </div>
      <div className="col-span-4">
        <input type="number"
        id="aquafina1500Case"
        name="aquafina1500Case"
        value={formData.aquafina1500Case}
        onChange={onChange}
        placeholder="Cases"
        className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
      </div>
    </div>

    <div className="grid grid-cols-12 gap-4 mb-4">
      <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="gatorade500Bottle">GATORADE 500 ML</label>
      <div className="col-span-4">
        <input type="number"
        id="gatorade500Bottle"
        name="gatorade500Bottle"
        value={formData.gatorade500Bottle}
        onChange={onChange}
        placeholder="Bottles"
        className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
      </div>
      <div className="col-span-4">
        <input type="number"
        id="gatorade500Case"
        name="gatorade500Case"
        value={formData.gatorade500Case}
        onChange={onChange}
        placeholder="Cases"
        className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
      </div>
    </div>

    <div className="grid grid-cols-12 gap-4 mb-4">
      <label className="col-span-4 flex items-center justify-center text-blue-900 text-sm font-semibold" htmlFor="revive300Bottle">REVIVE 300 ML</label>
      <div className="col-span-4">
        <input type="number"
        id="revive300Bottle"
        name="revive300Bottle"
        value={formData.revive300Bottle}
        onChange={onChange}
        placeholder="Bottles"
        className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
      </div>
      <div className="col-span-4">
        <input type="number"
        id="revive300Case"
        name="revive300Case"
        value={formData.revive300Case}
        onChange={onChange}
        placeholder="Cases"
        className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" />
      </div>
    </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
      >
        Save Data
      </button>
    </form>
  );
}

