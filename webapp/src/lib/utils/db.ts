export const getAll = async (locals: App.Locals, collection: string) =>
	structuredClone(await locals.pb.collection(collection).getFullList());


