import Swal from "sweetalert2";
export const logOut = () => {
  const router = useRouter();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout",
      cancelButtonText: "Nah, Just kidding",
    }).then((result: any) => {
      if (result.value) {
        localStorage.clear();
        router.push({ path: "/" });
        window.location.href = "/"
      } else {
        Swal.fire("Cancelled", "Action was cancelled", "info");
      }
    });
  };
