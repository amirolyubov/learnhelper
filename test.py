# strings = 'int time_play=1;int speed_row[] = {[(0,), (0,), (0,), (0,), (0,), (9,), (20,), (30,), (45,), (45,), (80,), (89,), (90,), (190,)]};int LEyeArray[][] = {[(0,), (0,), (0,), (0,), (0,), (9,), (20,), (30,), (45,), (45,), (80,), (89,), (90,), (190,)]};int REyeArray[] = {[(0,), (0,), (0,), (0,), (0,), (9,), (99,)]};int LArmArray[] = {[(0,), (0,), (0,), (9,)]};int RArmArray[] = {[(0,), (0,), (0,), (9,)]};int LhandArray[] = {[(0,), (0,), (0,), (9,)]};int RhandArray[] = {[(0,), (0,), (0,), (9,)]};int LLegArray[] = {[(0,), (0,), (0,), (9,)]};int RLegArray[] = {[(0,), (0,), (9,)]};int AssArray[] = {[(0,), (0,), (9,)]};int KeyArray[] = {[]}'.split(';')
#
# import re
#
# def shit_2_cplusplus(arr):
#     parsed_arr = []
#     for str in arr:
#         str = re.sub(r'\[\]\[\]', '', str)
#         parsed_arr.append(str)
#     print(parsed_arr)
#
#
# shit_2_cplusplus(strings)
#
# # const str_2_cplusplus_code = arr => {
# #   let parsed_arr = []
# #   for (let i = 0; i < arr.length; i++) {
# #     row = arr[i]
# #     row = row
# #     .replace(/\[\]\[\]/g, '[]')
# #     .replace(/[\(\)]/g, '')
# #     .replace(/\{\[/g, '{')
# #     .replace(/\]\}/g, '}')
# #     .replace(/\,\}/g, '}') + ';'
# #     if (!row.match(/AssArray/)) row = row.replace(/,,/g, ',')
# #     parsed_arr.push(row)
# #   }
# #   return parsed_arr
# # }
