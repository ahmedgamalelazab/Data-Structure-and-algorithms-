
namespace SortingAlgorithms;


public class QuickSort
{

    public static List<T> Sort<T>(List<T> items, Func<T, T, bool> callback) where T : new()
    {
        //base case 
        if (items.Count > 1)
        {
            var left = new List<T>();
            var right = new List<T>();
            var same = new List<T>();

            T pivot = items[items.Count / 2];

            //some operations of o[n]
            items.ForEach((item) =>
            {
                if (item!.Equals(pivot))
                {
                    same.Add(item);
                }
                else if (callback(item, pivot))
                {
                    left.Add(item);

                }
                else
                {
                    right.Add(item);
                }
            });

            left = Sort(left, callback);
            right = Sort(right, callback);

            items.Clear();

            items.AddRange(left);
            items.AddRange(same);
            items.AddRange(right);

            return items;

        }

        return items;
    }

}