
import React from 'react';
import './table.css';

export default function UserDataTable({ data }) {



// Function to split and reverse the date string from 'YYYY-MM-DD' to 'DD/MM/YYYY'
  const reverseDate = (dateString) => {
    if (!dateString) return '';
    const dateParts = dateString.split('-'); // Split by '-'
    if (dateParts.length !== 3) return dateString; // fallback if not the expected format
    const reversedDate = dateParts.reverse(); // Reverse the array
    return reversedDate.join('/'); // Join with '/'
  };





  const formatMonth = (inputMonth) => {
    const [year, month] = inputMonth.split('-');
    const dateObj = new Date(year, parseInt(month, 10) - 1);
    const formattedMonth = dateObj.toLocaleString('en-US', { month: 'short' });
    return `${formattedMonth}-${year}`;
  };


  

  // Check if data is empty

  if (!data || data.length === 0) {
    return (
      <p className="text-center text-gray-500 italic">No lowfil slip saved yet.</p>
    );
  }

  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="relative w-[740px] h-[1079px] m-5 p-5 bg-white shadow-lg rounded-lg overflow-hidden"
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
          }}>
      {/* <img
          src="/assets/pbl-Ao8xM0q7.gif"
          alt="Logo"
          className="absolute top-2 left-2 w-[110px] h-[38px]"
        /> */}


        <table className="w-[700px] h-[1035px] m-0 p-2 border-4 border-black border-collapse">
          <tbody>
            <tr>
              <td colSpan={14} className="text-center text-sm font-sans py-1 font-bold">
                <h3>PAKISTAN BEVERAGE LIMITED</h3>
              </td>
            </tr>
            <tr>
              <td colSpan={14} className="text-center text-base py-1 font-semibold">
                BURST BREAKAGE LOWFILL SLIP
              </td>
            </tr>
            <tr>
              <td colSpan={3} className="txt font-bold txt2 border border-black">NAME OUTLET</td>
              <td colSpan={5} className="txt font-bold txt2 border border-black">{item.outletName}</td>
              <td className="txt font-bold txt2 border border-black">CODE NO.</td>
              <td className="txt font-bold txt2 border border-black">{item.outletCode}</td>
              <td className="txt font-bold txt2 border border-black">DATE</td>
              <td colSpan={3} className="txt font-bold txt2 border border-black">{reverseDate(item.date)}</td>
            </tr>
            <tr>
              <td colSpan={3} className="txt font-bold txt2 border border-black">CR D/M NAME</td>
              <td colSpan={5} className="txt font-bold txt2 border border-black">{item.crName}</td>
              <td className="txt font-bold txt2 border border-black">CARD NO.</td>
              <td className="txt font-bold txt2 border border-black">{item.crCode}</td>
              <td className="txt font-bold txt2 border border-black">MONTH</td>
              <td colSpan={3} className="txt font-bold txt2 border border-black">{formatMonth(item.month)}</td>
            </tr>
            <tr>
              <td colSpan={3} className="txt font-bold txt2 border border-black">ROUTE</td>
              <td colSpan={6} className="txt font-bold txt2 border border-black">{item.routeName}</td>
              <td className="txt font-bold txt2 border border-black">{item.routeCode}</td>
              <td className="txt font-bold txt2 border border-black">ZONE</td>
              <td colSpan={3} className="txt font-bold txt2 border border-black">{item.zone}</td>
            </tr>
            <tr>
              <td colSpan={14} className="txt border border-black txt2">&nbsp;</td>
            </tr>
            <tr>
              <td colSpan={3} className="txt font-bold txt2 border border-black  bg-slate-300">PACKAGES</td>
              <td colSpan={2} className="txt font-bold txt2 border border-black bg-slate-300">
                BURST<br />BOTTLE
              </td>
              <td colSpan={1} className="txt font-bold txt2 border border-black bg-slate-300">
                BREAKAGE<br />BOTTLE
              </td>
              <td className="txt font-bold txt2 border border-black bg-slate-300">DESIGNATION</td>
              <td colSpan={3} className="txt font-bold txt2 border border-black bg-slate-300">NAME</td>
              <td colSpan={4} className="txt font-bold txt2 border border-black bg-slate-300">SIGNATURE</td>
            </tr>
            {/* Rows with burst, breakage and designation */}
            <tr>
              <td className="txt border border-black txt2">1</td>
              <td colSpan={2} className="txt border border-black txt2 align-top h-[42px]">
                REGULAR <br />250ML
              </td>
              <td colSpan={2} rowSpan={3} className="txt border border-black txt2 text-center">{item.regMtBot}</td>
              <td colSpan={1} rowSpan={3} className="txt border border-black txt2 text-center">{item.regMtCase}</td>
              <td colSpan={1} rowSpan={3} className="txt border border-black txt2 align-top">ADR</td>
              <td colSpan={3} rowSpan={3} className="text-[9px] border border-black txt2 align-top">
                <br />
                {item.adrName} <br />
                <br />
              </td>
              <td colSpan={5} rowSpan={3} className="txt border border-black txt2"></td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr>
              <td className="txt border border-black txt2">2</td>
              <td colSpan={2} className="txt border border-black txt2 align-top h-[42px]">
                SLICE <br />240ML
              </td>
              <td colSpan={2} rowSpan={3} className="txt border border-black txt2 text-center">{item.slcMtBot}</td>
              <td colSpan={1} rowSpan={3} className="txt border border-black txt2 text-center">{item.slcMtCase}</td>
              <td colSpan={1} rowSpan={3} className="txt border border-black txt2 align-top">TDM</td>
              <td colSpan={3} rowSpan={3} className="text-[9px] border border-black txt2 align-top">
                <br />
                {item.tdmName} <br />
                <br />
              </td>
              <td colSpan={5} rowSpan={3} className="txt border border-black txt2"></td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr>
              <td className="txt border border-black txt2">3</td>
              <td colSpan={2} className="txt border border-black txt2 align-top h-[42px]">
                STING <br />240ML
              </td>
              <td colSpan={2} rowSpan={3} className="txt border border-black txt2 text-center">{item.stingMtBot}</td>
              <td colSpan={1} rowSpan={3} className="txt border border-black txt2 text-center">{item.stingMtCase}</td>
              <td colSpan={1} rowSpan={3} className="txt border border-black txt2 align-top">RSM/SM</td>
              <td colSpan={3} rowSpan={3} className="text-[9px] border border-black txt2 align-top">
                <br />
                {item.smName} <br />
                <br />
              </td>
              <td colSpan={5} rowSpan={3} className="txt border border-black txt2"></td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr>
              <td colSpan={3} className="txt font-bold txt2 border border-black bg-slate-300">Lowfill Categories</td>
              <td colSpan={2} className="txt font-bold txt2 border border-black bg-slate-300">PIECES</td>
              <td colSpan={1} className="txt font-bold txt2 border border-black bg-slate-300">CASES</td>
              <td colSpan={3} className="txt font-bold txt2 border border-black bg-slate-300">BOTTLE ACCOUNT SIGNATURE</td>
              <td colSpan={3} className="txt font-bold txt2 border border-black bg-slate-300">DPG 1,2,3,4,5 OFFICER NAME SIGNATURE</td>
            </tr>

            {/* Further product rows */}
            <tr>
              <td colSpan={3} className="txt border border-black txt2">REG 250ML</td>
              <td colSpan={2} className="txt border border-black txt2 text-center">{item.regular250Bottle}</td>
              <td className="txt border border-black txt2 text-center">{item.regular250Case}</td>
              <td colSpan={3} rowSpan={3} className="txt border border-black txt2"></td>
              <td colSpan={3} rowSpan={3} className="txt border border-black txt2"></td>
            </tr>
            <tr>
              <td colSpan={3} className="txt border border-black txt2">Sting 240ml</td>
              <td colSpan={2} className="txt border border-black txt2 text-center">{item.sting240Bottle}</td>
              <td colSpan={1} className="txt border border-black txt2 text-center">{item.sting240Case}</td>
            </tr>
            <tr>
              <td colSpan={3} className="txt border border-black txt2">Slice 240ml</td>
              <td colSpan={2} className="txt border border-black txt2 text-center">{item.slice240Bottle}</td>
              <td colSpan={1} className="txt border border-black txt2 text-center">{item.slice240Case}</td>
            </tr>
            <tr>
              <td colSpan={3} className="txt border border-black txt2">Can 250ml</td>
              <td colSpan={2} className="txt border border-black txt2 text-center">{item.can250Bottle}</td>
              <td colSpan={1} className="txt border border-black txt2 text-center">{item.can250Case}</td>
              <td colSpan={3} className="txt border border-black txt2">LAST YEAR SALE</td>
              <td colSpan={3} className="txt border border-black txt2">CURRENT YEAR SALE</td>
            </tr>
            <tr>
              <td colSpan={3} className="txt border border-black txt2">PET 345ml</td>
              <td colSpan={2} className="txt border border-black txt2 text-center">{item.pet345Bottle}</td>
              <td colSpan={1} className="txt border border-black txt2 text-center">{item.pet345Case}</td>
              <td colSpan={3} rowSpan={5} className="txt border border-black txt2 text-center">{item.lastYearSales} C/S</td>
              <td colSpan={3} rowSpan={5} className="txt border border-black txt2 text-center">{item.currentYearSales} C/S</td>
            </tr>
            <tr>
              <td colSpan={3} className="txt border border-black txt2">PET 500ml</td>
              <td colSpan={2} className="txt border border-black txt2 text-center">{item.pet500Bottle}</td>
              <td colSpan={1} className="txt border border-black txt2 text-center">{item.pet500Case}</td>
            </tr>
            <tr>
              <td colSpan={3} className="txt border border-black txt2">PET 1000ml</td>
              <td colSpan={2} className="txt border border-black txt2 text-center">{item.pet1000Bottle}</td>
              <td colSpan={1} className="txt border border-black txt2 text-center">{item.pet1000Case}</td>
            </tr>
            <tr>
              <td colSpan={3} className="txt border border-black txt2">PET 1250ml</td>
              <td colSpan={2} className="txt border border-black txt2 text-center">{item.pet1250Bottle}</td>
              <td colSpan={1} className="txt border border-black txt2 text-center">{item.pet1250Case}</td>
            </tr>
            <tr>
              <td colSpan={3} className="txt border border-black txt2">PET 1.5 Ltr</td>
              <td colSpan={2} className="txt border border-black txt2 text-center">{item.pet1500Bottle}</td>
              <td colSpan={1} className="txt border border-black txt2 text-center">{item.pet1500Case}</td>
            </tr>
            <tr>
              <td colSpan={3} className="txt border border-black txt2">PET 2.25 LTR</td>
              <td colSpan={2} className="txt border border-black txt2 text-center">{item.pet2250Bottle}</td>
              <td colSpan={1} className="txt border border-black txt2 text-center">{item.pet2250Case}</td>
              <td colSpan={3} className="txt border border-black txt2">DAMAGE/BREAK/L/FILL</td>
              <td colSpan={3} className="txt border border-black txt2">EXPIRED</td>
            </tr>
            <tr>
              <td colSpan={3} className="txt border border-black txt2">CAN 300ML</td>
              <td colSpan={2} className="txt border border-black txt2 text-center">{item.can300Bottle}</td>
              <td colSpan={1} className="txt border border-black txt2 text-center">{item.can300Case}</td>
              <td colSpan={3} rowSpan={4} className="txt border border-black txt2">
                DAMAGE/ LOWFILL/ <br /> BURST{" "}
              </td>
              <td colSpan={3} rowSpan={4} className="txt border border-black txt2 text-center">{item.expBox}</td>
            </tr>
            <tr>
              <td colSpan={3} className="txt border border-black txt2">StingPet 500ml</td>
              <td colSpan={2} className="txt border border-black txt2 text-center">{item.sting500Bottle}</td>
              <td colSpan={1} className="txt border border-black txt2 text-center">{item.sting500Case}</td>
            </tr>
            <tr>
              <td colSpan={3} className="txt border border-black txt2">StingPet 300ml</td>
              <td colSpan={2} className="txt border border-black txt2 text-center">{item.sting300Bottle}</td>
              <td colSpan={1} className="txt border border-black txt2 text-center">{item.sting300Case}</td>
            </tr>
            <tr>
              <td colSpan={3} className="txt border border-black txt2">StingCan 250ml</td>
              <td colSpan={2} className="txt border border-black txt2 text-center">{item.stingCanBottle}</td>
              <td colSpan={1} className="txt border border-black txt2 text-center">{item.stingCanCase}</td>
            </tr>
            <tr>
              <td colSpan={3} className="txt border border-black txt2">SlicePet 355ml</td>
              <td colSpan={2} className="txt border border-black txt2 text-center">{item.slice355Bottle}</td>
              <td colSpan={1} className="txt border border-black txt2 text-center">{item.slice355Case}</td>
              <td colSpan={3} className="txt border border-black txt2">MANAGER AUDIT</td>
              <td colSpan={3} className="txt border border-black txt2">DIRECTOR</td>
            </tr>
            <tr>
              <td colSpan={3} className="txt border border-black txt2">Slice PET 1Lrt</td>
              <td colSpan={2} className="txt border border-black txt2 text-center">{item.slicePet1000Bottle}</td>
              <td colSpan={1} className="txt border border-black txt2 text-center">{item.slicePet1000Case}</td>
              <td colSpan={3} rowSpan={8} className="txt border border-black txt2"></td>
              <td colSpan={3} rowSpan={8} className="txt border border-black txt2"></td>
            </tr>
            <tr>
              <td colSpan={3} className="txt border border-black txt2">Slice Tet 1Ltr</td>
              <td colSpan={2} className="txt border border-black txt2 text-center">{item.sliceTetra1000Bottle}</td>
              <td colSpan={1} className="txt border border-black txt2 text-center">{item.sliceTetra1000Case}</td>
            </tr>
            <tr>
              <td colSpan={3} className="txt border border-black txt2">Slice TET 200ml</td>
              <td colSpan={2} className="txt border border-black txt2 text-center">{item.slicetetra200Bottle}</td>
              <td colSpan={1} className="txt border border-black txt2 text-center">{item.slicetetra200Case}</td>
            </tr>
            <tr>
              <td colSpan={3} className="txt border border-black txt2">Aquafina 330ml</td>
              <td colSpan={2} className="txt border border-black txt2 text-center">{item.aquafina330Bottle}</td>
              <td colSpan={1} className="txt border border-black txt2 text-center">{item.aquafina330Case}</td>
            </tr>
            <tr>
              <td colSpan={3} className="txt border border-black txt2">Aquafina 500ml</td>
              <td colSpan={2} className="txt border border-black txt2 text-center">{item.aquafina500Bottle}</td>
              <td colSpan={1} className="txt border border-black txt2 text-center">{item.aquafina500Case}</td>
            </tr>
            <tr>
              <td colSpan={3} className="txt border border-black txt2">Aquafina 1.5Ltr</td>
              <td colSpan={2} className="txt border border-black txt2 text-center">{item.aquafina1500Bottle}</td>
              <td colSpan={1} className="txt border border-black txt2 text-center">{item.aquafina1500Case}</td>
            </tr>
            <tr>
              <td colSpan={3} className="txt border border-black txt2">Gatorade 500ml</td>
              <td colSpan={2} className="txt border border-black txt2 text-center">{item.gatorade500Bottle}</td>
              <td colSpan={1} className="txt border border-black txt2 text-center">{item.gatorade500Case}</td>
            </tr>
            <tr>
              <td colSpan={3} className="txt border border-black txt2">Revive 300ml</td>
              <td colSpan={2} className="txt border border-black txt2 text-center">{item.revive300Bottle}</td>
              <td colSpan={1} className="txt border border-black txt2 text-center">{item.revive300Case}</td>
            </tr>
            <tr>
              <td
                colSpan={13}
                className="text-[12px] text-center bg-black bg-opacity-10 border border-black p-2"
              >
                This slip is valid for 10 days from the current date given above.
              </td>
            </tr>
          </tbody>
        </table>
       </div>
        
      ))}
    </>
  );
}
