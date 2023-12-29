import axios from "@/axios";
export const mdaresApi = async () => {
  let apiResult = await axios.get("DataFileService.aspx?UnitId=106&$top=10");
  let returnArray = [];
  apiResult.data.map((item) => {
    returnArray.push({
      date: item["公告日期"],
      url: item["網址"],
      title: item["技術移轉項目"],
      vendor: item["授權業者"],
    });
  });
  return returnArray;
};
