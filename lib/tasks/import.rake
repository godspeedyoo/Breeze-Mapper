#lib/tasks/import.rake
desc "Imports a CSV file into an ActiveRecord table"

# task :csv_model_import, [:filename, :model] => [:environment] do |task,args|
#   lines = File.new(args[:filename]).readlines
#   header = lines.shift.strip
#   keys = header.split(',')
#   byebug
#   lines.each do |line|
#     values = line.strip.split(',')
#     attributes = Hash[keys.zip values]
#     byebug
#     Module.const_get(args[:model]).create(attributes)
#   end
# end

require 'csv'

task :csv_model_import, [:filename, :model] => :environment do |task,args|
	firstline = 0
	keys = {}

	CSV.foreach(args[:filename]) do |row|
		row.shift

		if (firstline == 0)
			keys = row
 			firstline = 1
		next
		end

		params = {}
		keys.each_with_index do |key,i|
			params[key] = row[i]
		end
		Module.const_get(args[:model]).create(params)
	end
end