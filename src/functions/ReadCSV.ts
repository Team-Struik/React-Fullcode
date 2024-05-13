import { ParseResult } from "papaparse";
import { useState, useEffect } from "react";
import Papa from "papaparse";

type Data = {
    Materiaalsoort: string;
    Spatrand: string;
    Vensterbank: string;
    Boorgaten_per_stuk_mogelijk: boolean;
    WCD_mogelijk: boolean;
    Randafwerking_mogelijk: boolean;
    Prijs_per_m2: number;
    Randafwerking_pm: number;
    Spatrand_pm: number;
    Vensterbank_pm: number;
    Uitsparing_onderbouw: number;
    Uitsparing_inleg: number;
    Uitsparing_ruw: number;
    Kraangat: number;
    Zeepdispenser: number;
    Boorgaten_per_stuk: number;
    WCD: number;
    Achterwand_pm: number;
    Randafwerking_pm_optie2: number;
};

type Values = {
    data: Data[];
};

const useReadCSV = () => {
    const [values, setValues] = useState<Values | undefined>();

    const getCSV = () => {
        Papa.parse("../../Pricelist.csv", {
            header: true,
            download: true,
            delimiter: ";",
            complete: (result: ParseResult<Data>) => {
                setValues(result);
            },
        });
    };

    useEffect(() => {
        getCSV();
    }, []);

    return values?.data;
};

export default useReadCSV;