

// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useSnackbar } from 'notistack';



// Define a constant for the local storage key
const STORAGE_KEY = 'userDataList';

const App = () => {
  const [view, setView] = useState('form');
  // Initialize form data state
  const [formData, setFormData] = useState({

    date: '',
    month: '',
    name: '',
    email: '',
    age: '',
    outletName: '',
    outletCode: '',
    routeName: '',
    routeCode: '',
    zone: '',
    crName: '',
    crCode: '',
    adrName: '',
    tdmName: '',
    smName: '',
    lastYearSales: '',
    currentYearSales: '',
    expBox: '',
    regMtBot: '',
    regMtCase: '',
    slcMtBot: '',
    slcMtCase: '',
    stingMtBot: '',
    stingMtCase: '',
    regular250Bottle: '',
    regular250Case: '',
    sting240Bottle: '',
    sting240Case: '',
    slice240Bottle: '',
    slice240Case: ''


  });

  // Initialize dataList state to hold user data
  const [dataList, setDataList] = useState([]);

  // Create a ref for the download element
  const downloadRef = useRef(null);
  const { enqueueSnackbar } = useSnackbar();

  // Load saved data from local storage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      setDataList(JSON.parse(savedData));
    }
  }, []);

  // Save data to local storage whenever dataList changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataList));
  }, [dataList]);

  // Handle input changes in the form
  const handleInputChange = ({ target: { name, value } }) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleFormSubmit = (data) => {
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
        aquafina6ltrBottle,
        aquafina6ltrCase,
        regular250Bottle,// Optional
        regular250Case, // Optional
        sting240Bottle, // Optional
        sting240Case, // Optional
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

    } = data;


    // Validate form data
    if (
      !date.trim() ||
      !month.trim() ||
      !outletName.trim()

    ) {
      // Show an alert if any field is empty  
      return alert('Please fill in all fields');
    }

    // Add the new data to the dataList state
    setDataList(prev => [...prev, {

      date: date.trim(),
      month: month.trim(),
      outletName: outletName.trim(),
      outletCode: outletCode.trim(),
      routeName: routeName.trim(),
      routeCode: routeCode.trim(),
      zone: zone.trim(),
      crName: crName.trim(),
      crCode: crCode.trim(),
      adrName: adrName.trim(),
      tdmName: tdmName.trim(),
      smName: smName.trim(),
      lastYearSales: lastYearSales.trim(),
      currentYearSales: currentYearSales.trim(),
      expBox: expBox.trim(),
      regMtBot: regMtBot?.trim(),
      regMtCase: regMtCase?.trim(),
      slcMtBot: slcMtBot?.trim(),
      slcMtCase: slcMtCase?.trim(),
      stingMtBot: stingMtBot?.trim(),
      stingMtCase: stingMtCase?.trim(),
      aquafina6ltrBottle: aquafina6ltrBottle?.trim(),
      aquafina6ltrCase: aquafina6ltrCase?.trim(),
      regular250Bottle: regular250Bottle?.trim(),
      regular250Case: regular250Case?.trim(),
      sting240Bottle: sting240Bottle?.trim(),
      sting240Case: sting240Case?.trim(),
      slice240Bottle: slice240Bottle?.trim(),
      slice240Case: slice240Case?.trim(),
      can250Bottle: can250Bottle?.trim(),
      can250Case: can250Case?.trim(),
      pet345Bottle: pet345Bottle?.trim(),
      pet345Case: pet345Case?.trim(),
      pet500Bottle: pet500Bottle?.trim(),
      pet500Case: pet500Case?.trim(),
      pet1000Bottle: pet1000Bottle?.trim(),
      pet1000Case: pet1000Case?.trim(),
      pet1250Bottle: pet1250Bottle?.trim(),
      pet1250Case: pet1250Case?.trim(),
      pet1500Bottle: pet1500Bottle?.trim(),
      pet1500Case: pet1500Case?.trim(),
      pet2250Bottle: pet2250Bottle?.trim(),
      pet2250Case: pet2250Case?.trim(),
      can300Bottle: can300Bottle?.trim(),
      can300Case: can300Case?.trim(),
      sting500Bottle: sting500Bottle?.trim(),
      sting500Case: sting500Case?.trim(),
      sting300Bottle: sting300Bottle?.trim(),
      sting300Case: sting300Case?.trim(),
      stingCanBottle: stingCanBottle?.trim(),
      stingCanCase: stingCanCase?.trim(),
      slice355Bottle: slice355Bottle?.trim(),
      slice355Case: slice355Case?.trim(),
      slicePet1000Bottle: slicePet1000Bottle?.trim(),
      slicePet1000Case: slicePet1000Case?.trim(),
      sliceTetra1000Bottle: sliceTetra1000Bottle?.trim(),
      sliceTetra1000Case: sliceTetra1000Case?.trim(),
      slicetetra200Bottle: slicetetra200Bottle?.trim(),
      slicetetra200Case: slicetetra200Case?.trim(),
      aquafina330Bottle: aquafina330Bottle?.trim(),
      aquafina330Case: aquafina330Case?.trim(),
      aquafina500Bottle: aquafina500Bottle?.trim(),
      aquafina500Case: aquafina500Case?.trim(),
      aquafina1500Bottle: aquafina1500Bottle?.trim(),
      aquafina1500Case: aquafina1500Case?.trim(),
      gatorade500Bottle: gatorade500Bottle?.trim(),
      gatorade500Case: gatorade500Case?.trim(),
      revive300Bottle: revive300Bottle?.trim(),
      revive300Case: revive300Case?.trim()

    }]);



    // Reset form data to initial state
    setFormData({

      date: '',
      month: '',
      outletName: '',
      outletCode: '',
      routeName: '',
      routeCode: '',
      zone: '',
      crName: '',
      crCode: '',
      adrName: '',
      tdmName: '',
      smName: '',
      lastYearSales: '',
      currentYearSales: '',
      expBox: '',
      regMtBot: '',
      regMtCase: '',
      slcMtBot: '',
      slcMtCase: '',
      stingMtBot: '',
      stingMtCase: '',
      aquafina6ltrBottle: '',
      aquafina6ltrCase: '',
      regular250Bottle: '',
      regular250Case: '',
      sting240Bottle: '',
      sting240Case: '',
      slice240Bottle: '',
      slice240Case: '',
      can250Bottle: '',
      can250Case: '',
      pet345Bottle: '',
      pet345Case: '',
      pet500Bottle: '',
      pet500Case: '',
      pet1000Bottle: '',
      pet1000Case: '',
      pet1250Bottle: '',
      pet1250Case: '',
      pet1500Bottle: '',
      pet1500Case: '',
      pet2250Bottle: '',
      pet2250Case: '',
      can300Bottle: '',
      can300Case: '',
      sting500Bottle: '',
      sting500Case: '',
      sting300Bottle: '',
      sting300Case: '',
      stingCanBottle: '',
      stingCanCase: '',
      slice355Bottle: '',
      slice355Case: '',
      slicePet1000Bottle: '',
      slicePet1000Case: '',
      sliceTetra1000Bottle: '',
      sliceTetra1000Case: '',
      slicetetra200Bottle: '',
      slicetetra200Case: '',
      aquafina330Bottle: '',
      aquafina330Case: '',
      aquafina500Bottle: '',
      aquafina500Case: '',
      aquafina1500Bottle: '',
      aquafina1500Case: '',
      gatorade500Bottle: '',
      gatorade500Case: '',
      revive300Bottle: '',
      revive300Case: ''

    });
    // Switch view to table after submission
    setView('table');
  };





// // Function to handle PDF download
  const handleDownload = async () => {
    if (!downloadRef.current) return;

    const element = downloadRef.current;
    const originalStyle = {
      height: element.style.height,
      overflow: element.style.overflow,
    };
    element.style.height = `${element.scrollHeight}px`;
    element.style.overflow = 'visible';

    await new Promise(resolve => setTimeout(resolve, 300));

    try {
      const canvas = await html2canvas(element, {
        scale: 2,                                   // increase resolution
        scrollY: -window.scrollY,
        useCORS: true,
      });

      const imgData = canvas.toDataURL('image/jpeg', 1000); // higher quality JPEG
      element.style.height = originalStyle.height;
      element.style.overflow = originalStyle.overflow;

      const pdf = new jsPDF('p', 'pt', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      const scaledHeight = (imgHeight * pdfWidth) / imgWidth;
      let position = 0;

      while (position < scaledHeight) {
        if (position > 0) pdf.addPage();
        pdf.addImage(
          imgData,
          'JPEG',
          0,
          -position,
          pdfWidth,
          scaledHeight
        );
        position += pdfHeight;
      }

      pdf.save('lowfill.pdf');
    } catch (error) {
      element.style.height = originalStyle.height;
      element.style.overflow = originalStyle.overflow;
      console.error(error);
      alert('Failed to create PDF. See console for details.');
    }
  };



  

  // Function to clear local storage and reset dataList
  const handleClearLocalStorage = () => {
    localStorage.removeItem(STORAGE_KEY);
    setDataList([]);
    enqueueSnackbar('All slips have been deleted!', { variant: 'success' });
    setView('form');

    // Reset form data
    setFormData({

      date: '',
      month: '',
      outletName: ''

    });
  };


  return (
    <div className="p-4 max-h-auto overflow-auto flex flex-col bg-slate-800 rounded-lg shadow-lg">
      <div className="flex gap-3 mb-2">
        <button
          type="button"
          onClick={() => setView('form')}
          className={`py-2 px-2 rounded-lg font-semibold transition-colors ${view === 'form' ? 'bg-blue-600 text-white' : 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-100'}`}
        >
          Show Form
        </button>
        <button
          type="button"
          onClick={() => setView('table')}
          className={`py-2 px-2 rounded-lg font-semibold transition-colors ${view === 'table' ? 'bg-blue-600 text-white' : 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-100'}`}
        >
          Show SLIP
        </button>
        <button
          type="button"
          onClick={handleClearLocalStorage}
          className="py-2 px-1 rounded-lg font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors"
        >
          Clear All SLIPS
        </button>
      </div>

      {view === 'form' && (
        <Form formData={formData} onChange={handleInputChange} onSubmit={handleFormSubmit} />
      )}
      {view === 'table' && (
        <>
          <div ref={downloadRef} className="bg-slate-300 p-3 rounded-lg shadow flex flex-wrap w-[1540px] max-h-auto overflow-auto">
            <Table data={dataList} />
          </div>
          <button
            onClick={handleDownload}
            className="mt-4 w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors"
            type="button"
          >
            Download PDF
          </button>
        </>
      )}
    </div>
  );
};

export default App;






