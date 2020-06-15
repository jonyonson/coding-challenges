# def findDuplicates(nums):
#     counts = {}
#     results = []

#     for num in nums:
#         if num in counts:
#             counts[num] += 1
#         else:
#             counts[num] = 1

#     for k, v in counts.items():
#         if v > 1:
#             results.append(k)

#     return results


def findDuplicates(nums):
    nums_set = set()
    dupes = set()

    for num in nums:
        if num not in nums_set:
            nums_set.add(num)
        else:
            dupes.add(num)

    return list(dupes)
