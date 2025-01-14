import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function PublishedFormsSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-10 w-[200px]" />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]"><Skeleton className="h-4 w-full" /></TableHead>
            <TableHead><Skeleton className="h-4 w-full" /></TableHead>
            <TableHead><Skeleton className="h-4 w-full" /></TableHead>
            <TableHead className="text-right"><Skeleton className="h-4 w-full" /></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...Array(5)].map((_, i) => (
            <TableRow key={i}>
              <TableCell><Skeleton className="h-4 w-full" /></TableCell>
              <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
              <TableCell><Skeleton className="h-4 w-[50px]" /></TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end space-x-2">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
