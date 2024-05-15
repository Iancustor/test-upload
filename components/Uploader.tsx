// "use client";

// import { UploadButton, UploadDropzone } from "@/utils/uploadthing";

// export default function Uploader() {
//   return (
//     <main className="flex min-h-4 flex-col items-center justify-between">
//       <UploadDropzone
//         endpoint="imageUploader"
//         onClientUploadComplete={(res) => {
//           // Do something with the response
//           console.log("Files: ", res);
//           alert("Upload Completed");
//         }}
//         onUploadError={(error: Error) => {
//           // Do something with the error.
//           alert(`ERROR! ${error.message}`);
//         }}
//       />
//     </main>
//   );
// }
